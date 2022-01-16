const { User } = require('../models');

const userData = [
    // username, email, password
    {
        username: 'test',
        email: 'test123@email.com',
        password: 'abc123'
    },
    {
        username: 'test2',
        email: 'test123@email.com',
        password: 'abc123'
    }
];

const seedUsers = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = seedUsers;
