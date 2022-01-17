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

// post request to make a new comment
router.post('/', (req, res) => {
    if(req.session) {
        Comment.create({
          comment_text: req.body.comment_text,
          user_id: req.session.user_id,
          post_id: req.body.post_id
        })
            .then(dbCommentData => res.json(dbCommentData))
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            });
        }
});

// delete request to destroy comment
router.delete('/:id', (req, res) => {
    Comment.destroy({
        where: {
            id: req.params.id
        }
    })
        .then(dbCommentData => {
            if(!dbCommentData) {
                res.status(404).json({ message: 'No comment found' });
                return;
            }
            res.json(dbCommentData)
            })
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
        });
    });

module.exports = router;