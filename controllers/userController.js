const User = require('../models/User');

module.exports = {
    async getUsers(req, res) {
        try {
            const dbUserData = await User.find();
            res.json(dbUserData);
        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    },
    async createUser(req, res) {
        try {
            const dbUserData = await User.create(req.body);
            res.json(dbUserData);
        } catch (err) {
            console.error(err);
            res.status(500).json(err);
        }
    }































};