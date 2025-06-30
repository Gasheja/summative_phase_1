const Task = require('../models/taskModel');

const getTasks = (req, res) => {
  Task.getAllTasks((err, tasks) => {
    if (err) return res.status(500).send(err);
    res.json(tasks);
  });
};

const addTask = (req, res) => {
  Task.createTask(req.body, (err, task) => {
    if (err) return res.status(500).send(err);
    res.status(201).json(task);
  });
};

module.exports = { getTasks, addTask };
