const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./tasks.db');

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS tasks (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      title TEXT NOT NULL,
      description TEXT,
      completed INTEGER DEFAULT 0,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    )
  `);
});

// Export functions
module.exports = {
  getAllTasks(callback) {
    db.all('SELECT * FROM tasks', callback);
  },

  addTask(title, description = '', created_at = null, callback) {
    let timestamp;
    if (created_at) {
      timestamp = created_at;
    } else {
      const now = new Date();
      timestamp = new Date(now.getTime() - (now.getTimezoneOffset() * 60000)).toISOString().slice(0, -1);
    }
    
    db.run(
      'INSERT INTO tasks (title, description, completed, created_at) VALUES (?, ?, 0, ?)',
      [title, description, timestamp],
      function (err) {
        if (err) return callback(err);
        db.get('SELECT * FROM tasks WHERE id = ?', [this.lastID], callback);
      }
    );
  },

  toggleTask(id, callback) {
    db.run(
      `UPDATE tasks SET completed = NOT completed WHERE id = ?`,
      [id],
      callback
    );
  },

  deleteTask(id, callback) {
    db.run('DELETE FROM tasks WHERE id = ?', [id], callback);
  }
};