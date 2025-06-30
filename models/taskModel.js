const db = require('../database/db');

const getAllTasks = (callback) => {
  db.all('SELECT * FROM tasks', [], callback);
};

const createTask = (data, callback) => {
  const { title, description, deadline } = data;
  db.run(
    `INSERT INTO tasks (title, description, deadline) VALUES (?, ?, ?)`,
    [title, description, deadline],
    function (err) {
      callback(err, { id: this.lastID, ...data });
    }
  );
};

module.exports = { getAllTasks, createTask };
