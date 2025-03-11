// Create web server
// Create post request for comments
// Create get request for comments
// Create get request for comments by id
// Create put request for comments by id
// Create delete request for comments by id

const express = require('express');
const router = express.Router();
const Comment = require('../models/comment');

// Get all comments
router.get('/', async (req, res) => {
  try {
    const comments = await Comment.find();
    res.json(comments);
  } catch (err) {
    res.json({ message: err });
  }
});

// Get a specific comment
router.get('/:commentId', async (req, res) => {
  try {
    const comment = await Comment.findById(req.params.commentId);
    res.json(comment);
  } catch (err) {
    res.json({ message: err });
  }
});

// Create a comment
router.post('/', async (req, res) => {
  const comment = new Comment({