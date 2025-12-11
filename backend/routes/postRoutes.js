const express = require("express");
const Post = require("../models/Post");
const router = express.Router();

// Add new post
router.post("/", async (req, res) => {
  try {
    const post = new Post(req.body);
    await post.save();
    res.json(post);
  } catch (err) {
    res.status(500).json(err);
  }
});

// Get all posts OR search
router.get("/", async (req, res) => {
  try {
    const search = req.query.search || "";
    const posts = await Post.find({
      title: { $regex: search, $options: "i" }
    });
    res.json(posts);
  } catch (err) {
    res.status(500).json(err);
  }
});



module.exports = router;
