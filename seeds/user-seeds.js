const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

const userdata = [{
        username: 'kcheykim1',
        password: 'password123'
    },
    {
        username: 'scheykim2',
        password: 'password123'
    },
    {
        username: 'pcheykim3',
        password: 'password123'
    },
    {
        username: 'vmartinez4',
        password: 'password123'
    },
    {
        username: 'bmartinez5',
        password: 'password123'
    },
    {
        username: 'pmartinez6',
        password: 'password123'
    },
    {
        username: 'abratcher7',
        password: 'password123'
    },
    {
        username: 'dbratcher8',
        password: 'password123'
    },
    {
        username: 'jbratcher9',
        password: 'password123'
    },
    {
        username: 'tbratcher10',
        password: 'password123'
    }
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;