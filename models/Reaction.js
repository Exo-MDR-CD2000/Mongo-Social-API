const { Schema, Types } = require("mongoose");

// reaction will be a schema only used by the Thought model

function dateFormat(timestamp) {
  return new Date(timestamp).toLocaleDateString();
}
// terminal give me a dateFormat error for some reason even though the createdAt field was working fine before it.
// this date function above is a temporary fix to remove the date error. It does remove the full date string and trunkates it to just MM/DD/YYYY.

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId(),
    },
    reactionBody: {
      type: String,
      required: true,
      maxLength: 280,
    },
    username: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date, // uses a default value of the current timestamp
      default: Date.now, // defaults the value to a function that returns the current timestamp
      get: (timestamp) => dateFormat(timestamp), // uses a getter method to format the timestamp on query
    },
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = reactionSchema;
