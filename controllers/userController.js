const User = require("../models/User");

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
    },
    async getUserById(req, res) {
        try {
            const dbUserData = await User.findOne({ _id: req.params.id })
            .select("-__v");

            if (!dbUserData) {
                return res.status(404).json({ message: "No user with this id!" });
            }
            res.json(dbUserData);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async updateUserById(req, res) {
        try {
            const dbUserData = await User.findOneAndUpdate(
                { _id: req.params.id },
                req.body,
                { new: true, runValidators: true }
            );
            if (!dbUserData) {
                return res.status(404).json({ message: "No user with this id!" });
            }
            res.json(dbUserData);
        }
        catch (err) {
            res.status(500).json(err);
        }
    },
    async deleteUserById(req, res) {
        try {
            const dbUserData = await User.findOneAndDelete({ _id: req.params.id });

            if (!dbUserData) {
                return res.status(404).json({ message: "No user with this id!" });
            }

            // delete associated thoughts

            //await Thought.deleteMany({ username: dbUserData.username });

            res.json(dbUserData);
        } catch (err) {
            res.status(500).json(err);
        }
    },

    // the next two methods will be used to add and remove friends from a user's friend list

    async addFriend(req, res) {
        try {
            const dbUserData = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $addToSet: { friends: req.params.friendId } },
                { new: true }
            );

            if (!dbUserData) {
                return res.status(404).json({ message: "No user with this id!" });
            }

            res.json(dbUserData);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async deleteFriend(req, res) {
        try {
            const dbUserData = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $pull: { friends: req.params.friendId } },
                { new: true }
            );

            if (!dbUserData) {
                return res.status(404).json({ message: "No user with this id!" });
            }

            res.json(dbUserData);
        }
        catch (err) {
            res.status(500).json(err);
        }
    }
};

// to send a POST request to the /api/users route to create a new user:
// {
//     "username": "lernantino",
//     "email": "lernantino@gmail.com",
// }



// to get a user by id:
// http://localhost:3001/api/users/5edff358a0fcb779aa7b118b