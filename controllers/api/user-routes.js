const router = require('express').Router();
const { User, Post, Comment } = require('../../models');

router.get('/', (req, res) => { //get all users
    User.findAll({
            attributes: { exclude: ['password'] }
        }).then(dbUserData => res.json(dbUserData))
        .catch(err => { res.status(500).json(err); });
});