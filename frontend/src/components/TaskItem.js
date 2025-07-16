import React from 'react';

const TaskItem = ({ task, onDelete, onToggle, onView }) => {
  return (
    <div className="d-flex justify-content-between align-items-center border bg-light rounded p-2 mb-2">
      <div
        onClick={() => onView(task)}  
        className={`w-100 text-center ${task.completed === 1 ? 'text-decoration-line-through text-muted' : ''}`}
        style={{ cursor: 'pointer' }}
      >
        {task.title}
      </div>

      <div className="ms-2 d-flex align-items-center">
        <button
          onClick={() => onToggle(task.id)} 
          className="btn btn-sm btn-outline-success me-1"
          title="Mark Complete/Incomplete"
        >
          ✔️
        </button>
        <button
          onClick={() => onDelete(task.id)}
          className="btn btn-sm btn-outline-danger"
          title="Delete"
        >
          ❌
        </button>
      </div>
    </div>
  );
};

export default TaskItem;