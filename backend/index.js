const express = require('express');
const cors = require('cors');
const db = require('./db');

const app = express();
const PORT = 3001;

app.use(cors());
app.use(express.json());

// GET
app.get('/tasks', (req, res) => {
  db.getAllTasks((err, rows) => {
    if (err) return res.status(500).send(err.message);
    res.json(rows);
  });
});

// POST
app.post('/tasks', (req, res) => {
  const { title } = req.body;
  if (!title) return res.status(400).send('Title is required');
  
  const now = new Date();
  const localTime = new Date(now.getTime() - (now.getTimezoneOffset() * 60000)).toISOString().slice(0, -1);
  
  db.addTask(title, '', localTime, (err, task) => {
    if (err) return res.status(500).send(err.message);
    res.status(201).json(task);
  });
});

// PUT
app.put('/tasks/:id', (req, res) => {
  db.toggleTask(req.params.id, (err) => {
    if (err) return res.status(500).send(err.message);
    res.sendStatus(200);
  });
});

// DELETE
app.delete('/tasks/:id', (req, res) => {
  db.deleteTask(req.params.id, (err) => {
    if (err) return res.status(500).send(err.message);
    res.sendStatus(200);
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});