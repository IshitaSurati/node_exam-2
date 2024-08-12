const mongoose = require('mongoose');
const { Schema } = mongoose;

const BlogSchema = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: true },
    img: { type: String },
    author: { type: Schema.Types.ObjectId, ref: "User", required: true },
    createdAt: { type: Date, default: Date.now },
    userId: { type: String, required: true }
});

const Blog = mongoose.model('Blog', BlogSchema);

module.exports = Blog;
