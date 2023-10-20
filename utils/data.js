const usernames = [
    'johndoe',
    'janedoe',
    'axlrose',
    'slash',
    'duffmckagan',
    'izzystradlin',
    'stevenadler',
    'gilbyclarke',
    'johnnythunders',
    'Beatles87',
    'RollingStones',
    'DarkSideOfTheMoon',
    'PinkFloyd',
    'TearsFF97',
]
// 14 usernames

const users = usernames.map(username => ({
  username,
  email: `${username}@gmail.com`
}));


module.exports = users;