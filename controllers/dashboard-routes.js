// // const router = require('express').Router();
// // const sequelize = require('../config/connection');
// // const { Post, User, Comment } = require('../models');
// // const withAuth = require('../utils/auth');

// // router.get('/', withAuth, (req, res) => { //get all posts for dashboard
// //     Post.findAll({
// //         where: { user_id: req.session.user_id },
// //         attributes: ['id', 'title', 'contents', 'created_at'],
// //         include: [{
// //                 model: Comment,
// //                 attributes: ['id', 'comment_text', 'user_id', 'post_id', 'created_at'],
// //                 include: { model: User, attributes: ['username'] }
// //             },
// //             { model: User, attributes: ['username'] }
// //         ]
// //     }).then(dbPostData => {
// //         const posts = dbPostData.map(post => post.get({ plain: true }));
// //         res.render('dashboard', { posts, loggedIn: true });
// //     }).catch(err => { res.status(500).json(err); });
// // });

// // router.get('/edit/:id', withAuth, (req, res) => {
// //     Post.findByPk(req.params.id, {
// //         attributes: ['id', 'title', 'contents', 'created_at'],
// //         include: [{
// //                 model: Comment,
// //                 attributes: ['id', 'comment_text', 'user_id', 'post_id', 'created_at'],
// //                 include: { model: User, attributes: ['username'] }
// //             },
// //             { model: User, attributes: ['username'] }
// //         ]
// //     }).then(dbPostData => {
// //         if (dbPostData) {
// //             const post = dbPostData.get({ plain: true });
// //             res.render('edit-post', { post, loggedIn: true });
// //         } else {
// //             res.status(404).end();
// //         }
// //     }).catch(err => { res.status(500).json(err); });
// // });

// // module.exports = router;

// const router = require("express").Router();
// const { User, Recipe, Rating } = require("../models");
// const withAuth = require("../utils/auth");

// router.get("/", withAuth, (req, res) => {
//     //get all recipe for dashboard
//     Recipe.findAll({
//             where: {
//                 user_id: req.session.user_id,
//             },
//             attributes: ["id", "title", "photo_path", "created_at"],
//             include: [{
//                     //include its associated Rating
//                     model: Rating,
//                     attributes: ["id", "rating_comment", "rating_score"],
//                     include: {
//                         model: User,
//                         attributes: ["username"],
//                     },
//                 }, //include its associated User
//                 {
//                     model: User,
//                     attributes: ["username"],
//                 },
//             ],
//         })
//         .then((recipeData) => {
//             const recipes = recipeData.map((recipe) =>
//                 recipe.get({
//                     plain: true,
//                 })
//             );
//             res.render("dashboard", {
//                 recipes,
//                 loggedIn: true,
//             });
//         })
//         .catch((err) => {
//             res.status(500).json(err);
//         });
// });

// router.get("/edit/:id", withAuth, (req, res) => {
//     Recipe.findByPk(req.params.id, {
//             attributes: [
//                 "id",
//                 "title",
//                 "ingredients",
//                 "direction",
//                 "express_hint",
//                 "photo_path",
//                 "created_at",
//             ],
//             include: [{
//                     //include its associated Rating
//                     model: Rating,
//                     attributes: ["id", "rating_comment", "rating_score"],
//                     include: {
//                         model: User,
//                         attributes: ["username"],
//                     },
//                 }, //include its associated User
//                 {
//                     model: User,
//                     attributes: ["username", "id", "email"],
//                 },
//             ],
//         })
//         .then((recipeData) => {
//             if (recipeData) {
//                 const recipe = recipeData.get({ plain: true });
//                 console.log(recipe.user.id);
//                 console.log(req.session.user_id);
//                 if (recipe.user.id === req.session.user_id) {
//                     res.render("edit-recipe", { recipe, loggedIn: true });
//                 } else {
//                     res.render("homepage");
//                 }
//             } else {
//                 res.status(404).end();
//             }
//         })
//         .catch((err) => {
//             res.status(500).json(err);
//         });
// });

// module.exports = router;
const router = require("express").Router();
const { User, Recipe, Rating } = require("../models");
const withAuth = require("../utils/auth");

router.get("/", withAuth, (req, res) => {
    //get all recipe for dashboard
    Recipe.findAll({
            where: {
                user_id: req.session.user_id,
            },
            attributes: ["id", "title", "photo_path", "created_at"],
            include: [{
                    //include its associated Rating
                    model: Rating,
                    attributes: ["id", "rating_comment", "rating_score"],
                    include: {
                        model: User,
                        attributes: ["username"],
                    },
                }, //include its associated User
                {
                    model: User,
                    attributes: ["username"],
                },
            ],
        })
        .then((recipeData) => {
            const recipes = recipeData.map((recipe) =>
                recipe.get({
                    plain: true,
                })
            );
            res.render("dashboard", {
                recipes,
                loggedIn: true,
            });
        })
        .catch((err) => {
            res.status(500).json(err);
        });
});

router.get("/edit/:id", withAuth, (req, res) => {
    Recipe.findByPk(req.params.id, {
            attributes: [
                "id",
                "title",
                "ingredients",
                "direction",
                "express_hint",
                "photo_path",
                "created_at",
            ],
            include: [{
                    //include its associated Rating
                    model: Rating,
                    attributes: ["id", "rating_comment", "rating_score"],
                    include: {
                        model: User,
                        attributes: ["username"],
                    },
                }, //include its associated User
                {
                    model: User,
                    attributes: ["username", "id", "email"],
                },
            ],
        })
        .then((recipeData) => {
            if (recipeData) {
                const recipe = recipeData.get({ plain: true });
                console.log(recipe.user.id);
                console.log(req.session.user_id);
                if (recipe.user.id === req.session.user_id) {
                    res.render("edit-recipe", { recipe, loggedIn: true });
                } else {
                    res.render("homepage");
                }
            } else {
                res.status(404).end();
            }
        })
        .catch((err) => {
            res.status(500).json(err);
        });
});

module.exports = router;