const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

//get reuqest for all comments
router.get('/', (req, res) => {
    Comment.findAll({
        attributes: ['id',
                    'comment_text',
                    ],
        order: [['id', 'DESC']]
    })
    .then(dbCommentData => res.json(dbCommentData))
    .catch(err => {
        console.log(err);
        res.status(500).json(err);
    });
});

// post request to make a new post

// delete request to destroy comment

module.exports = router;