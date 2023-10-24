function generateUsers() {
  const users = [
    {
      username: "johndoe",
      email: "john33@gmail.com",
    },
    {
      username: "janedoe",
      email: "jane55@gmail.com",
    },
    {
      username: "axlrose",
      email: "axlRose99@gmail.com",
    },
    {
      username: "exoticjoe",
      email: "exotic66@gmail.com",
    },
  ];

  console.log('users seeded', users)
  return users;
}


//TODO: fix generateThoughts function


function generateThoughts(users) { // currently not working
  const thoughts = [];

  users.forEach((user) => {
    const thought = {
      thoughtText: `This is ${user.username}'s first thought.`,
      username: user.username,
      createdAt: new Date(),
      reactions: [],
      userId: users.find(user => user.username === thought.username)._id
    };

    thoughts.push(thought);
  });

  return thoughts;
}

module.exports = { generateUsers, generateThoughts };



    // example json body for creating a thought:
    // {
    //     "thoughtText": "Here's a cool thought...",
    //     "username": "lernantino",
    //     "userId": "5edff358a0fcb779aa7b118b"
    //   }