const router = require('express').Router();
const sequelize = require('../../config/connection');
const { Post, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => { //get all posts
    Post.findAll({
            attributes: ['id', 'title', 'contents', 'user_id', 'created_at'],
            include: [{
                    model: Comment,
                    attributes: ['id', 'comment_text'],
                    include: { model: User, attributes: ['username'] }
                },
                { model: User, attributes: ['username'] }
            ]
        }).then(dbPostData => res.json(dbPostData))
        .catch(err => { res.status(500).json(err); });
});

router.get('/:id', (req, res) => { //get post by ID
    Post.findOne({
        where: { id: req.params.id },
        attributes: ['id', 'title', 'contents', 'created_at'],
        include: [{
                model: Comment,
                attributes: ['id', 'comment_text', 'user_id', 'post_id', 'created_at'],
                include: { model: User, attributes: ['username'] }
            },
            { model: User, attributes: ['username'] }
        ]
    }).then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'Post Not Found' });
            return;
        }
        res.json(dbPostData);
    }).catch(err => { res.status(500).json(err); });
});

router.post('/', withAuth, (req, res) => { //expect title, contents, user_id
    Post.create({
            title: req.body.title,
            contents: req.body.contents,
            user_id: req.session.user_id
        }).then(dbPostData => res.json(dbPostData))
        .catch(err => { res.status(500).json(err); });
});

router.put('/:id', withAuth, (req, res) => { //update post by ID
    Post.update({
        title: req.body.title,
        contents: req.body.contents
    }, {
        where: { id: req.params.id }
    }).then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'Post Not Found' });
            return;
        }
        res.json(dbPostData);
    }).catch(err => { res.status(500).json(err); });
});

router.delete('/:id', withAuth, (req, res) => { //remove post by ID
    Post.destroy({
        where: { id: req.params.id }
    }).then(dbPostData => {
        if (!dbPostData) {
            res.status(404).json({ message: 'Post Not Found' });
            return;
        }
        res.json(dbPostData);
    }).catch(err => { res.status(500).json(err); });
});

module.exports = router;