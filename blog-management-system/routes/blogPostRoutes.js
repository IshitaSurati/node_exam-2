const { Router } = require("express");
const { getBlog, createBlog, updateBlog, deleteBlog, findBlogByUserId } = require("../controllers/blogPostController");
const { findById } = require("../models/User");

const BlogRoute = Router();

BlogRoute.get("/", getBlog);
BlogRoute.get("/:id", findById);
BlogRoute.post("/", createBlog);
BlogRoute.patch("/:id", updateBlog);
BlogRoute.delete("/:id", deleteBlog);
BlogRoute.get("/user/:userId", findBlogByUserId);

module.exports = BlogRoute;
