# 📝 Task Tracker (React + Node.js + SQLite)

A simple full-stack task tracking app built with **React** frontend, **Node.js** backend, and **SQLite** as a lightweight database.

---

## 📦 Tech Stack

| Layer    | Technology       |
| -------- | ---------------- |
| Frontend | React, Bootstrap |
| Backend  | Node.js, Express |
| Database | SQLite           |
| HTTP     | Axios            |

---

## 🚀 Features

- ✅ Add a new task
- ✅ View task
- ✅ Mark task as completed
- ✅ Delete a task
- ✅ Filter: All / Completed / Incomplete
- ✅ Centered layout with Bootstrap
- ✅ SQLite database (task.db)

---

## 🛠️ Setup Instructions

### 1. Clone the repository

```bash
git clone https://github.com/your-username/task-tracker-react-nodejs.git
cd task-tracker-react-nodejs
```

---

### 2. Start the Backend (Node.js + SQLite)

```bash
cd backend
npm install
node index.js
```

This runs the backend at: `http://localhost:3001`

---

### 3. Start the Frontend (React + Bootstrap)

```bash
cd frontend
npm install
npm start
```

This runs the frontend at: `http://localhost:3000`

---

## 📎 How to Use

1. Start backend (`node index.js`)
2. Start frontend (`npm start`)
3. Open browser at [http://localhost:3000](http://localhost:3000)
4. Type a task → click **Add**
5. Click on a task to mark as complete
6. Use **All / Completed / Incomplete** buttons to filter
7. Click ❌ to delete a task

---

## 📁 File Structure

```
task-tracker-react-nodejs/
├── backend/
│   ├── index.js          # Express server + SQLite logic
│   └── task.db           # SQLite DB
├── frontend/
│   ├── src/
│   │   ├── components/   # TaskForm, TaskItem, TaskList, TaskModal
│   │   ├── App.js
│   │   └── index.js
│   └── public/
└── README.md
```

---

## 📌 Assumptions & Notes

- Assumes you have Node.js and npm installed
- SQLite database is stored locally in `task.db`
- No authentication included (public app)

---
