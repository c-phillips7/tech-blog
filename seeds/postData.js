const { Post } = require('../models');

const postData = [
  // title, descrption, user_id
  {
    title: 'This is a test title!',
    description: 'This is a test description',
    created_at:'2016-04-27 09:00:00',
    user_id: 1
  },
  {
    title: 'This is another test title!!!',
    description: 'This is another test description',
    created_at: '2017-04-27 09:00:00',
    user_id: 2
  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
