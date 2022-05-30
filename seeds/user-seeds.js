const { User } = require('../models');

const userData = [{
        username: 'Beth',
        email: 'beth@gmail.com',
        password: 'Bethany123'

    },
    {
        username: 'Steph',
        email: 'steffffy@gmail.com',
        password: 'Stephanie0'
    },
    {
        username: 'Brian',
        email: 'bmanbman@gmail.com',
        password: 'bmaniscool'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;