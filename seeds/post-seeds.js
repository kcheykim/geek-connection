const { Post } = require('../models');

const postdata = [{
        title: 'Blog by User 10',
        contents: 'Donec posuere metus vitae ipsum.',
        user_id: 10
    },
    {
        title: 'Blog by User 8',
        contents: 'Morbi non quam nec dui luctus rutrum.',
        user_id: 8
    },
    {
        title: 'Blog by User 1',
        contents: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
        user_id: 1
    },
    {
        title: 'Blog by User 4',
        contents: 'Nunc purus.',
        user_id: 4
    },
    {
        title: 'Blog by User 7',
        contents: 'Pellentesque eget nunc.',
        user_id: 7
    },
    {
        title: 'Blog by User 4',
        contents: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        user_id: 4
    },
    {
        title: 'Blog by User 1',
        contents: 'In hac habitasse platea dictumst.',
        user_id: 1
    },
    {
        title: 'Blog by User 1',
        contents: 'Morbi non quam nec dui luctus rutrum.',
        user_id: 1
    },
    {
        title: 'Blog by User 9',
        contents: 'Duis ac nibh.',
        user_id: 9
    },
    {
        title: 'Blog by User 5',
        contents: 'Curabitur at ipsum ac tellus semper interdum.',
        user_id: 5
    },
    {
        title: 'Blog by User 3',
        contents: 'In hac habitasse platea dictumst.',
        user_id: 3
    },
    {
        title: 'Blog by User 10',
        contents: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
        user_id: 10
    },
    {
        title: 'Blog by User 8',
        contents: 'Donec dapibus.',
        user_id: 8
    },
    {
        title: 'Blog by User 3',
        contents: 'Nulla tellus.',
        user_id: 3
    },
    {
        title: 'Blog by User 3',
        contents: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
        user_id: 3
    },
    {
        title: 'Blog by User 7',
        contents: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
        user_id: 7
    },
    {
        title: 'Blog by User 6',
        contents: 'In hac habitasse platea dictumst.',
        user_id: 6
    },
    {
        title: 'Blog by User 4',
        contents: 'Etiam justo.',
        user_id: 4
    },
    {
        title: 'Blog by User 6',
        contents: 'Nulla ut erat id mauris vulputate elementum.',
        user_id: 6
    },
    {
        title: 'Blog by User 7',
        contents: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
        user_id: 7
    }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;