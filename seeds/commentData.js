const { Comment } = require('../models');

const commentData = [{
        comment_text: 'This is a test comment.',
        user_id: 1,
        post_id: 1
    },
    {
        comment_text: 'Another test comment for post id 2.',
        user_id: 2,
        post_id: 2
    }
];

const seedComments = () => Comment.bulkCreate(commentData);

module.exports = seedComments;