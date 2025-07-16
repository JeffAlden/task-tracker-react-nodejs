import React, { useEffect, useState } from 'react';
import axios from 'axios';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import TaskModal from './components/TaskModal';

function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');
  const [selectedTask, setSelectedTask] = useState(null);

  // Fetch tasks from backend
  const fetchTasks = async () => {
    try {
      const res = await axios.get('http://localhost:3001/tasks');
      setTasks(res.data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  // Add new task
  const addTask = async (title) => {
    try {
      const res = await axios.post('http://localhost:3001/tasks', { title });
      setTasks(prevTasks => [...prevTasks, res.data]);
    } catch (error) {
      console.error('Error adding task:', error);
      await fetchTasks();
    }
  };

  // Task completed
  const toggleTask = async (id) => {
    try {
      await axios.put(`http://localhost:3001/tasks/${id}`);
      setTasks(prevTasks => 
        prevTasks.map(task => 
          task.id === id 
            ? { ...task, completed: task.completed ? 0 : 1 }
            : task
        )
      );
    } catch (error) {
      console.error('Error toggling task:', error);
      await fetchTasks();
    }
  };

  // Delete task
  const deleteTask = async (id) => {
    try {
      await axios.delete(`http://localhost:3001/tasks/${id}`);
      setTasks(prevTasks => prevTasks.filter(task => task.id !== id));
    } catch (error) {
      console.error('Error deleting task:', error);
      await fetchTasks();
    }
  };

  const getFilteredTasks = () => {
    if (filter === 'completed') return tasks.filter(t => t.completed === 1);
    if (filter === 'incomplete') return tasks.filter(t => t.completed === 0);
    return tasks;
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">📝 Task Tracker</h1>

      <TaskForm onAdd={addTask} />

      <div className="text-center mb-4">
        <div className="btn-group">
          {['all', 'completed', 'incomplete'].map((type) => (
            <button
              key={type}
              onClick={() => setFilter(type)}
              className={`btn ${filter === type ? 'btn-primary' : 'btn-outline-primary'}`}
            >
              {type.charAt(0).toUpperCase() + type.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <TaskList
        tasks={getFilteredTasks()}
        onToggle={toggleTask}
        onDelete={deleteTask}
        onView={(task) => setSelectedTask(task)}
      />

      <TaskModal task={selectedTask} onClose={() => setSelectedTask(null)} />
    </div>
  );
}

export default App;