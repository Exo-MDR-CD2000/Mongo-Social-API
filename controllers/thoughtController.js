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
    }

    
    
    
    // example json body for creating a thought:
    // {
    //     "thoughtText": "Here's a cool thought...",
    //     "username": "lernantino",
    //     "userId": "5edff358a0fcb779aa7b118b"
    //   }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
};