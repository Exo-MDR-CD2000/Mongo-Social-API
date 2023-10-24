const connection = require('../config/connection');
const { generateUsers, generateThoughts } = require('./data');
const { User, Thought } = require('../models');



connection.on('error', (err) => err);

connection.once('open', async () => {
  await User.deleteMany({});
  await Thought.deleteMany({});

  await User.insertMany(generateUsers());

  console.log('users seeded');

  //const thoughts = await Thought.insertMany(generateThoughts(users));
  //const thoughts = await Thought.insertMany(generateThoughts(users).map(thought => ({...thought, userId: users.find(user => user.username === thought.username)._id})));

    //await Thought.collection.insertMany(generateThoughts(users).map(thought => ({...thought, userId: users.find(user => user.username === thought.username)._id})));

    // await Thought.collection.insertOne({
    //     thoughtText: "This is John Doe's first thought.",
    //     username: "johndoe",
    //     createdAt: new Date(),
    //     reactions: [],
    //     userId: users.find(user => user.username === "johndoe")._id
    // })
    

    //TODO: later fix how to insert thoughts with the correct userId

  console.log('thoughts seeded');

  process.exit(0);
});
