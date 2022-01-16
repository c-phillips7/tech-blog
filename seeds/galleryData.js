const { Post } = require('../models');

const postData = [
  // title, descrption, user_id
  {
    

  },
  {

  },
  {

  }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
