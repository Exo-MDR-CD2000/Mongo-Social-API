const Thought = require('../models/Thought');
const User = require('../models/User');

module.exports = {
    async getThoughts(req, res) {
        try {
            const dbThoughtData = await Thought.find();
            res.json(dbThoughtData);
        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    },
    async getThoughtById(req, res) { // route for this is /api/thoughts/:id
        try {
            const dbThoughtData = await Thought.findOne({ _id: req.params.id })
            .select("-__v");

            if (!dbThoughtData) {
                return res.status(404).json({ message: "No thought with this id!" });
            }
            res.json(dbThoughtData);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async createThought(req, res) { // route for this is /api/thoughts
        try {
            const { thoughtText, username, userId } = req.body;
            const dbThoughtData = await Thought.create({ thoughtText, username, userId });
            await User.findOneAndUpdate(
                { _id: userId },
                { $push: { thoughts: dbThoughtData._id } },
                { new: true }
            );
            res.json(dbThoughtData);
        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    },
    // example json body for creating a thought:
    // {
    //     "thoughtText": "Here's a cool thought...",
    //     "username": "lernantino",
    //     "userId": "5edff358a0fcb779aa7b118b"
    //   }
    async updateThoughtById(req, res) { // route for this is /api/thoughts/:id
        try {
            const dbThoughtData = await Thought.findOneAndUpdate({ _id: req.params.id}, req.body, 
                {new: true,
                runValidators: true
            }).select("-__v");

            if (!dbThoughtData) {
                return res.status(404).json({ message: "No thought with this id!" });
            }
            res.json(dbThoughtData);
        } catch (err) {
            res.status(500).json(err);

        }
    },

    // to update a thought in insomnia:
    // {
    //     "thoughtText": "Here's a cool thought...",
    //     "username": "lernantino",
    //     "userId": "5edff358a0fcb779aa7b118b"
    //   }

    async deleteThoughtById(req, res) { // route for this is /api/thoughts/:id}
        try {
            const dbThoughtData = await Thought.findOneAndDelete({ _id: req.params.id })
            .select("-__v");

            if (!dbThoughtData) {
                return res.status(404).json({ message: "No thought with this id!" });
            }

            await User.findOneAndUpdate(
                { username: dbThoughtData.username },
                { $pull: { thoughts: req.params.id } }
            );
            res.json(dbThoughtData);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    
    // After that, add routes for posting new reactions to thoughts and deleting reactions from thoughts.
    
    async addReaction(req, res) { // route for this is /api/thoughts/:id/reactions
        try {
            const dbThoughtData = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId }, // This WORKS!!
                { $addToSet: { reactions: req.body } },
                { runValidators: true, new: true }
            ).select("-__v");

            if (!dbThoughtData) {
                return res.status(404).json({ message: "No thought with this id!" });
            }
            res.json(dbThoughtData);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // the json body for adding a reaction is:
    // {
    //     "reactionBody": "Here's a cool reaction...",
    //     "username": "lernantino"
    //   }


    async deleteReactionById(req, res) { // route for this is /api/thoughts/:id/reactions/:reactionId
        try {
            const dbThoughtData = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $pull: { reactions: { reactionId: req.params.reactionId } } },
                { runValidators: true, new: true }
            ).select("-__v");

            if (!dbThoughtData) {
                return res.status(404).json({ message: "No thought with this id!" });
            }
            res.json(dbThoughtData);
        } catch (err) {
            res.status(500).json(err);
        }
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
};