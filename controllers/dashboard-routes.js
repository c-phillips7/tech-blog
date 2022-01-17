const router = require('express').Router();
const sequelize = require('../config/connection');
const { Post, User, Comment } = require('../models');
const withAuth = require('../utils/auth');

// /dahsboard route maps all posts to be seen
router.get('/', withAuth, (req, res) => {
    Post.findAll({
        // where filter triggers a 500 error, can't find why req.session.user_id wont work, so filtering of user's posts not functional
        // where: {
        //     user_id: req.session.post.user_id
        // },
        atttributes: [
            'id',
            'title',
            'content',
            'created_at',
        ],
        include: [
            {
                model: Comment,
                attributes: [
                    'id',
                    'comment_text',
                    'post_id',
                    'user_id',
                ],
                include: {
                    model: User,
                    attributes: ['username']
                }
            },
            {
                model: User,
                attributes: ['username']
            }
        ]
    })
    .then(dbPostData => {
        const posts = dbPostData.map(post => post.get({ plain:true }));
        res.render('dashboard', {posts, loggedIn: true });
        console.log('dashboeard rendered');
    })
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// TODO: Edit post option

module.exports = router;
