const Blog = require("../models/blogPost");

const createBlog = async (req, res) => {
    try {
        let data = await Blog.create(req.body);
        res.send(data);
    } catch (error) {
        res.status(500).send(error);
    }
};

const getBlog = async (req, res) => {
    try {
        let data = await Blog.find();
        res.send(data);
    } catch (error) {
        res.status(500).send(error);
    }
};

const deleteBlog = async (req, res) => {
    try {
        let { id } = req.params;
        let data = await Blog.findByIdAndDelete(id);
        res.send(data);
    } catch (error) {
        res.status(500).send(error);
    }
};

const updateBlog = async (req, res) => {
    try {
        let { id } = req.params;
        let data = await Blog.findByIdAndUpdate(id, req.body, { new: true });
        res.send(data);
    } catch (error) {
        res.status(500).send(error);
    }
};

const findById = async (req, res) => {
    try {
        let { id } = req.params;
        let data = await Blog.findById(id);
        res.send(data);
    } catch (error) {
        res.status(500).send(error);
    }
};

const findBlogByUserId = async (req, res) => {
    try {
        let { userId } = req.params;
        let data = await Blog.find({ userId });
        res.send(data);
    } catch (error) {
        res.status(500).send(error);
    }
};

module.exports = { createBlog, deleteBlog, updateBlog, getBlog, findById, findBlogByUserId };
