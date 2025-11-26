const express = require("express");
const Task = require("../models/task");
const auth = require("../middleware/auth");
const router = express.Router();

// CREATE TASK
router.post("/", auth, async (req, res) => {
  try {
    const task = await Task.create({
      userId: req.userId, // correct field name
      title: req.body.title,
      completed: false
    });
    res.json(task);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET ONLY LOGGED USER'S TASKS
router.get("/", auth, async (req, res) => {
  try {
    const tasks = await Task.find({ userId: req.userId }); // MUST MATCH SCHEMA FIELD
    res.json(tasks);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// UPDATE TASK
router.put("/:id", auth, async (req, res) => {
  try {
    const updated = await Task.findOneAndUpdate(
      { _id: req.params.id, userId: req.userId }, // secure update
      { completed: req.body.completed },
      { new: true }
    );
    res.json(updated);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// DELETE TASK
router.delete("/:id", auth, async (req, res) => {
  try {
    await Task.findOneAndDelete({ _id: req.params.id, userId: req.userId });
    res.json({ message: "Task deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
