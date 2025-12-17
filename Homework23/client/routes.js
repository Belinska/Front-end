const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();

const taskSchema = new mongoose.Schema({
  text: { type: String, required: true }
});

let Task;
try {
  Task = mongoose.model("Task");
} catch {
  Task = mongoose.model("Task", taskSchema);
}

router.get("/tasks", async (req, res) => {
  try {
    const tasks = await Task.find();
    res.json(tasks);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to load tasks" });
  }
});

router.post("/tasks", async (req, res) => {
  try {
    const task = new Task({ text: req.body.text });
    await task.save();
    res.json(task);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to add task" });
  }
});

module.exports = router;
