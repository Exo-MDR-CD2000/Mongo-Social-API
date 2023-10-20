const Thought = require('../models/Thought');

module.exports = {
    async getThoughts(req, res) {
        try {
            const dbThoughtData = await Thought.find();
            res.json(dbThoughtData);
        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    }
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
};