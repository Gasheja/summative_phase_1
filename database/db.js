const sqlite3 = require('sqlite3').verbose();

const db = new sqlite3.Database('./taskflow.db', (err) => {
  if (err) console.error('DB Error:', err.message);
  else console.log('Connected to SQLite DB');
});

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS tasks (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT,
      status TEXT DEFAULT 'To Do',
      deadline TEXT
    )
  `);
});

module.exports = db;
