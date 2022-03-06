const router = require('express').Router();
const { Comment, User } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', (req, res) => {
    Comment.findAll({
            attributes: ['id', 'comment_text', 'rating_score', 'user_id', 'post_id', 'created_at', 'updated_at'],
            order: [
                ['created_at', 'DESC']
            ],
            include: [{ model: User, attributes: ['username'] }]
        }).then(dbCommentData => res.json(dbCommentData))
        .catch(err => { res.status(500).json(err); });
});

router.get('/:id', (req, res) => {
    Comment.findOne({
            attributes: ['id', 'comment_text', 'rating_score', 'user_id', 'post_id', 'created_at', 'updated_at'],
            order: [
                ['created_at', 'DESC']
            ],
            include: [{ model: User, attributes: ['username'] }]
        }).then(dbCommentData => res.json(dbCommentData))
        .catch(err => { res.status(500).json(err); });
});

router.post('/', withAuth, (req, res) => { //expects comment_text, user_id: 1, post_id: 2
    Comment.create({
            comment_text: req.body.comment_text,
            user_id: req.session.user_id,
            post_id: req.body.post_id
        }).then(dbCommentData => res.json(dbCommentData))
        .catch(err => { res.status(400).json(err); });
});

router.delete('/:id', withAuth, (req, res) => { //delete commment by ID
    Comment.destroy({
        where: { id: req.params.id }
    }).then(dbCommentData => {
        if (!dbCommentData) {
            res.status(404).json({ message: 'Comment Not Found' });
            return;
        }
        res.json(dbCommentData);
    }).catch(err => { res.status(500).json(err); });
});

router.put('/:id', (req, res) => {
    Comment.update({
            comment_text: req.body.comment_text,
        }, {
            where: { id: req.params.id }
        }).then(dbPostData => res.json(dbPostData))
        .catch(err => { res.status(500).json(err); })
});

module.exports = router;