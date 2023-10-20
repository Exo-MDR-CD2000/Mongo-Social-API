const { Schema, model } = require('mongoose');

//Schema for Thought

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            minlength: 1,
            maxLength: 280,
        },
        createdAt: {
                type: Date, // uses a default value of the current timestamp
                default: Date.now, // defaults the value to a function that returns the current timestamp
                get: (timestamp) => dateFormat(timestamp), // uses a getter method to format the timestamp on query
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema], // defines an assoiation with the Reaction schema
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);


// make the virtual for reactionCount

thoughtSchema
.virtual('reactionCount')
.get(function() {
    return this.reactions.length;
})


// create the Thought model using the ThoughtSchema

const Thought = model('thought', thoughtSchema);

module.exports = Thought;
