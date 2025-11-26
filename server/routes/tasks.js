const express = require("express");
const Task = require("../models/task");
const auth = require("../middleware/auth");
const router = express.Router();

// CREATE TASK
router.post("/", auth, async (req, res) => {
  const task = await Task.create({
    userId: req.userId,   // CORRECT FIELD
    title: req.body.title,
    completed: false
  });
  res.json(task);
});

// GET ONLY LOGGED USER TASKS
router.get("/", auth, async (req, res) => {
  const tasks = await Task.find({ userId: req.userId });
  res.json(tasks);
});

// UPDATE TASK
router.put("/:id", auth, async (req, res) => {
  const updated = await Task.findOneAndUpdate(
    { _id: req.params.id, userId: req.userId },
    { completed: req.body.completed },
    { new: true }
  );
  res.json(updated);
});

// DELETE TASK
router.delete("/:id", auth, async (req, res) => {
  await Task.findOneAndDelete({ _id: req.params.id, userId: req.userId });
  res.json({ message: "Task deleted" });
});

module.exports = router;
