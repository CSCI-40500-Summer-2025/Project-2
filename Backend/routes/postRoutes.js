import express from "express";
import { userPost } from "../models/postModel.js";
const router = express.Router();

//Route for saving a new user's Post

router.post("/addpost", async (req, res) => {
  try {
    const { title, location, description, contact, date, type, userId } =
      req.body;

    // Validate required fields
    if (!title || !description || !contact || !date || !type || !userId) {
      return res.status(400).send({
        message:
          "Missing required fields: title, description, contact, date, type, or userId",
      });
    }

    const newUserPost = {
      title,
      location,
      description,
      contact,
      date,
      type,
      userId, // ✅ save user ID
    };

    const newPost = await userPost.create(newUserPost);
    return res.status(201).json(newPost);
  } catch (error) {
    console.error(error.message);
    res.status(500).send({ message: error.message });
  }
});

//Route for getting users Post
router.get("/allposts", async (request, response) => {
  try {
    const posts = await userPost.find({});
    return response.status(200).json(posts);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

//Route for getting a user's Post
router.get("/:id", async (request, response) => {
  try {
    const { id } = request.params;
    const posts = await userPost.findById(id);
    return response.status(200).json(posts);
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});

// Route for update a user's Post
router.put("/:id", async (request, response) => {
  try {
    if (
      !request.body.title ||
      !request.body.description ||
      !request.body.contact ||
      !request.body.date
    ) {
      return response.status(400).send({
        message:
          "Please send all required field: title, description, contact, date",
      });
    }
    const { id } = request.params;
    const result = await userPost.findByIdAndUpdate(id, request.body);

    if (!result) {
      return response.status(404).json({ message: "Post not found" });
    }
    return response.status(200).send({ message: "Post updated sucessfully" });
  } catch (error) {
    console.log(error.message);
    response.status(500).send({ message: error.message });
  }
});
// Route for deleting post
router.delete("/deletepost/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;

    if (!userId) {
      return res.status(400).json({ message: "Missing userId in request" });
    }

    const post = await userPost.findById(id);

    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    if (post.userId !== userId) {
      return res
        .status(403)
        .json({ message: "Unauthorized to delete this post" });
    }

    await userPost.findByIdAndDelete(id);

    return res.status(200).json({ message: "Post deleted successfully" });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: error.message });
  }
});
// PATCH /post/resolve/:id
router.patch("/resolve/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { userId } = req.body;

    if (!userId) {
      return res.status(400).json({ message: "Missing userId" });
    }

    const post = await userPost.findById(id);
    if (!post) {
      return res.status(404).json({ message: "Post not found" });
    }

    if (post.userId !== userId) {
      return res.status(403).json({ message: "Unauthorized" });
    }

    post.resolved = true;
    await post.save();

    res.status(200).json({ message: "Post marked as resolved", post });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
});

export default router;
