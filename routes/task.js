const express = require("express");

const router = express.Router();
const {
  getAllTasks,
  createTask,
  deleteTask,
  getTask,
  editTasks,
} = require("../controllers/tasks");

router.get("/tasks", getAllTasks);
router.post("/tasks", createTask);
router.get("/tasks/:id", getTask);
router.delete("/tasks/:id", deleteTask);
router.patch("/tasks/:id", editTasks);

module.exports = router;
