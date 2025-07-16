import React, { useState } from 'react';

const TaskForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim() === '') {
      alert('Task title is required');
      return;
    }
    onAdd(title);
    setTitle('');
  };

  return (
    <div className="text-center">
      <form onSubmit={handleSubmit} className="d-flex justify-content-center gap-2 mb-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter new task"
          className="form-control w-50"
        />
        <button className="btn btn-primary">Add</button>
      </form>
    </div>
  );
};

export default TaskForm;