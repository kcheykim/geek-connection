const sequelize = require('../config/connection');
const { User, Post, Comment } = require('../models');

const userdata = [{
        username: 'kcheykim',
        password: 'password123'
    },
    {
        username: 'scheykim',
        password: 'password123'
    },
    {
        username: 'pcheykim',
        password: 'password123'
    },
    {
        username: 'vmartinez',
        password: 'password123'
    },
    {
        username: 'bmartinez',
        password: 'password123'
    },
    {
        username: 'pmartinez',
        password: 'password123'
    },
    {
        username: 'abratcher',
        password: 'password123'
    },
    {
        username: 'dbratcher',
        password: 'password123'
    },
    {
        username: 'jbratcher',
        password: 'password123'
    },
    {
        username: 'tbratcher',
        password: 'password123'
    }
];

const seedUsers = () => User.bulkCreate(userdata, { individualHooks: true });

module.exports = seedUsers;