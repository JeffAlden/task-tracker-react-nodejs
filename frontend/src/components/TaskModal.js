import React from 'react';

const TaskModal = ({ task, onClose }) => {
  if (!task) return null;

  const isValidDate = (dateStr) => {
    const date = new Date(dateStr);
    return !isNaN(date.getTime());
  };

  return (
    <div
      className="modal show d-block"
      tabIndex="-1"
      style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}
    >
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content text-center">
          <div className="modal-header justify-content-center">
            <h5 className="modal-title">Task Details</h5>
            <button type="button" className="btn-close" onClick={onClose}></button>
          </div>
          <div className="modal-body">
            {/* Task Title */}
            <div className="alert alert-info text-center mb-3" role="alert">
              <h4 className="mb-0"> {task.title || 'Unnamed Task'}</h4>
            </div>

            {/* Task Details */}
            <div className="task-details text-center mx-auto" style={{ maxWidth: '400px' }}>
              <div className="detail-item mb-2">
                <strong>Status:</strong> {task.completed === 1 ? '✅ Completed' : '❌ Incomplete'}
              </div>

              {task.created_at && isValidDate(task.created_at) && (
                <div className="detail-item mb-2">
                  <strong>Created At:</strong> 
                  <div className="mt-1">
                    {new Date(task.created_at).toLocaleString('en-US', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric',
                      hour: '2-digit',
                      minute: '2-digit',
                      second: '2-digit'
                    })}
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="modal-footer justify-content-center">
            <button className="btn btn-secondary px-4" onClick={onClose}>Close</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskModal;