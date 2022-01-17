const router = require('express').Router();
const { Post, User, Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// get request for findAll users (NOTE: must include username of who posted)
router.get('/', (req, res) => {
    Post.findAll({
            attributes: [
                'id',
                'description',
                'title',
                'created_at'
            ],
            include: [{
                    model: Comment,
                    attributes: ['id', 'comment_text', 'post_id', 'user_id', 'created_at'],
                    include: {
                        // to display who made post on homepage
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
        .then(dbPostData => res.json(dbPostData))
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        });
});

router.get('/', async (req, res) => {
    try {
      const bdPostData = await Post.findAll({
        attributes: [
            'id',
            'description',
            'title',
            'created_at'
        ],
        include: [
          {
            model: Post,
            attributes: ['id',
            'description',
            'title',
            'created_at'],
          },
          {
              model: User,
              attributes: [
                  'username'
              ]
          }
        ],
      });
  
      const galleries = dbGalleryData.map((gallery) =>
        gallery.get({ plain: true })
      );
  
      res.render('homepage', {
        galleries,
        loggedIn: req.session.loggedIn,
      });
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  });

// get post by id

//post requestto create new post in db

// Update post by ID

module.exports = router;
