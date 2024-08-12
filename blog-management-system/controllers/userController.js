const User = require("../models/User");

const createUser = async (req, res) => {
    const { email } = req.body;

    try {
        let isUser = await User.findOne({ email });
        if (isUser) {
            return res.status(400).send({ message: "User already exists" });
        }

        let data = await User.create(req.body);
        return res.status(201).send(data);
    } catch (error) {
        res.status(500).send({ message: "Server error", error: error.message });
    }
};

const LoggedIn = async (req, res) => {
    const { email, password } = req.body;

    try {
        let isUser = await User.findOne({ email });
        if (!isUser) {
            return res.status(404).send({ message: "User not found" });
        }

        if (isUser.password !== password) {
            return res.status(400).send({ message: "Incorrect password" });
        }

        res.status(200).send({ message: "Logged in successfully", User: isUser });
    } catch (error) {
        res.status(500).send({ message: "Server error", error: error.message });
    }
};

module.exports = { createUser, LoggedIn };
