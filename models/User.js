const { Schema, model } = require("mongoose");

// Define schema for User

const userSchema = new Schema(
  {
    username: {
      // these are the fields that will be used to query the database
      type: String,
      unique: true,
      required: "Username is required",
      trim: true,
    },
    email: {
      type: String,
      required: "Email is required",
      unique: true,
      match: [
        /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
        "Please enter a valid e-mail address",
      ],
    },
    thoughts: [ // array of _id values referencing the Thought model
      // these are the fields that will be used to query the database
      {
        type: Schema.Types.ObjectId,
        ref: "thought",
      },
    ],
    friends: [ // array of _id values referencing the User model (self-reference)
      // these are the fields that will be used to query the database
      {
        type: Schema.Types.ObjectId,
        ref: "user",
      },
    ],
  },
  {
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);



// Now make a virtual property `friendCount` that retrieves the length of the user's friends array field on query.


userSchema
  .virtual('friendCount')
  .get(function () {
    return this.friends.length;
  })


  // Create the User model using the UserSchema

  const User = model('user', userSchema);

module.exports = User;