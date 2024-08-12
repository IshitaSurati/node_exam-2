const express = require('express');
const dbConnect = require('./config/db');
const cors = require('cors');
const userRouter = require('./routes/userRoutes');
const BlogRoute = require('./routes/blogPostRoutes');
require('dotenv').config();

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.send({ msg: "Node.js is running" });
});

app.use("/user", userRouter);
app.use("/Blogs", BlogRoute);  

app.listen(8090, () => {
    console.log("Listening on port 8090");
    dbConnect();
});
