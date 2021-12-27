const { Post } = require('../models');

const postdata = [{
        title: 'Tech Blog A',
        contents: 'Donec posuere metus vitae ipsum.',
        user_id: 10
    },
    {
        title: 'Tech Blog B',
        contents: 'Morbi non quam nec dui luctus rutrum.',
        user_id: 8
    },
    {
        title: 'Tech Blog C',
        contents: 'Donec diam neque, vestibulum eget, vulputate ut, ultrices vel, augue.',
        user_id: 1
    },
    {
        title: 'Tech Blog D',
        contents: 'Nunc purus.',
        user_id: 4
    },
    {
        title: 'Tech Blog E',
        contents: 'Pellentesque eget nunc.',
        user_id: 7
    },
    {
        title: 'Tech Blog F',
        contents: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit.',
        user_id: 4
    },
    {
        title: 'Tech Blog G',
        contents: 'In hac habitasse platea dictumst.',
        user_id: 1
    },
    {
        title: 'Tech Blog H',
        contents: 'Morbi non quam nec dui luctus rutrum.',
        user_id: 1
    },
    {
        title: 'Tech Blog I',
        contents: 'Duis ac nibh.',
        user_id: 9
    },
    {
        title: 'Tech Blog J',
        contents: 'Curabitur at ipsum ac tellus semper interdum.',
        user_id: 5
    },
    {
        title: 'Tech Blog K',
        contents: 'In hac habitasse platea dictumst.',
        user_id: 3
    },
    {
        title: 'Tech Blog L',
        contents: 'Morbi odio odio, elementum eu, interdum eu, tincidunt in, leo.',
        user_id: 10
    },
    {
        title: 'Tech Blog M',
        contents: 'Donec dapibus.',
        user_id: 8
    },
    {
        title: 'Tech Blog N',
        contents: 'Nulla tellus.',
        user_id: 3
    },
    {
        title: 'Tech Blog O',
        contents: 'Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
        user_id: 3
    },
    {
        title: 'Tech Blog P',
        contents: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam.',
        user_id: 7
    },
    {
        title: 'Tech Blog Q',
        contents: 'In hac habitasse platea dictumst.',
        user_id: 6
    },
    {
        title: 'Tech Blog R',
        contents: 'Etiam justo.',
        user_id: 4
    },
    {
        title: 'Tech Blog S',
        contents: 'Nulla ut erat id mauris vulputate elementum.',
        user_id: 6
    },
    {
        title: 'Tech Blog T',
        contents: 'Integer pede justo, lacinia eget, tincidunt eget, tempus vel, pede.',
        user_id: 7
    }
];

const seedPosts = () => Post.bulkCreate(postdata);

module.exports = seedPosts;