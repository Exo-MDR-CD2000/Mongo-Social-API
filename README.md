# Mongo-Social-API
Social platform API tool using NoSQL database

## Description

A custom built API was made in order to create the back end for a mockup social network web app. Users can post new thoughts and leave reactions to exisiting thoughts (akin to posting on a site and then leaving comments). Express.js was used for routing, MongoDB was used to create the database, as well as mongoose for model creation. This project was then deployed to Heroku and also linked to AtlasDB for cloud hosting database. The Heroku link below is the deployed link but it requires extra steps to view the data.

## Usage

- Go to: [Heroku Deployed App](https://vast-citadel-62912-a11c18d835c2.herokuapp.com/)
  - It's best to use Insomnia or other relevant application to view and test routes.
- User
  - Use the following URL path to view Users: `https://vast-citadel-62912-a11c18d835c2.herokuapp.com/api/users`
  - Use the followung URL path to create a new User: `https://vast-citadel-62912-a11c18d835c2.herokuapp.com/api/users`
    - The following JSON body will create a new user:
      - `{
   	"username": "insertNameHere",
    "email": "insertEmailHere"
  }`
  - To Update an Existing User: `https://vast-citadel-62912-a11c18d835c2.herokuapp.com/api/users/:id`
    - Replace `:id` with the user id you wish to update. Use the same JSON body for creating a new user
  - To delete an existing User: `https://vast-citadel-62912-a11c18d835c2.herokuapp.com/api/users/:id`
    - Replace `:id` with the user id you wish to delete
    - Any associated thoughts or reactions with the user will also be remove upon deletion.
  - Friends Functionality
    - This is server side only and will not appear on the AtlasDB side. 
    - To add a new friend use: `https://vast-citadel-62912-a11c18d835c2.herokuapp.com/api/users/:id/friends/:friend_id`
      - Replace `:id` with user id you wish to access the friend's list and replace `:friend_id` with which friend you want to add
    - To delete a friend: `https://vast-citadel-62912-a11c18d835c2.herokuapp.com/api/users/:id/friends/:friend_id`
      - Works similary to adding a friend
- Thoughts
  - To get all thoughts: `https://vast-citadel-62912-a11c18d835c2.herokuapp.com/api/thoughts`
  - To add a new thought: `https://vast-citadel-62912-a11c18d835c2.herokuapp.com/api/thoughts`
    - Use this JSON body as a template:
      - `{
  "thoughtText": "Insert comment here.",
  "username": "nameOfPoster",
  "userId": "insertUserIdHere"
}`
  - To get a thought by ID: `https://vast-citadel-62912-a11c18d835c2.herokuapp.com/api/thoughts/:id`
    - Replace `:id` with the thought ID you wish to get
  - To update an exisitng thought: `https://vast-citadel-62912-a11c18d835c2.herokuapp.com/api/thoughts/:id`
    - Use the same JSON body template for creating a new thought
  - To delete an existing thought: `https://vast-citadel-62912-a11c18d835c2.herokuapp.com/api/thoughts/:id`
    - Replace `:id` with the thought ID you want to delete
- Reactions
  - To add a new reaction: `https://vast-citadel-62912-a11c18d835c2.herokuapp.com/api/thoughts/:id/reactions`
    - Replace `:id` with the thought id you want to add a reaction to
    - Use this JSON body to format the reaction: `{
	"reactionBody": "Reaction comment body here.",
	"username": "nameOfReactionPoster"
}`
  - To delete an existing reaction: `https://vast-citadel-62912-a11c18d835c2.herokuapp.com/api/thoughts/:id/reactions/:reaction_id`
    - Replace `:id` with the thought id you want to remove a reaction from
    - Replace `:reaction_id` with the id of the reaction you want to remove.
    - Check all thoughts if you have trouble deleting a certain reaction

## Installation/Demo

As stated above, Insomnia is advised to view and test the routes. This demo video should help visually explain how one can go about testing the routes in insomnia:

[Demo tutorial](https://drive.google.com/file/d/1luIL_rFtXdUVDKrU5uP7O2JL0Nduw9Jk/view?usp=sharing)

## Deployment Link(s)

- [Github Repo](https://github.com/Exo-MDR-CD2000/Mongo-Social-API)

- [Heroku Deployed](https://vast-citadel-62912-a11c18d835c2.herokuapp.com/)

## Credits

- Class notes on MongoDB, mongoose package,NoSQL, etc.


## License
This project is licensed under [![License](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)

## Questions
If you have any questions regarding this project, please contact me at my [email](joseguillen587@yahoo.com) or visit my GitHub page at [GitHub Profile](https://github.com/Exo-MDR-CD2000).