import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, editTask, toggleTask } from '../features/tasks/tasksSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TaskItem = ({ task }) => {
  // State to handle the editing mode and the edited text
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);
  
  // Hook to get the dispatch function
  const dispatch = useDispatch();

  // Function to handle the deletion of a task
  const handleDelete = () => {
    dispatch(deleteTask(task.id));
    // Show a toast notification for task deletion
    toast.success('Task deleted successfully');
  };

  // Function to handle the toggling of a task's completion status
  const handleToggle = () => {
    dispatch(toggleTask(task.id));
    // Show a toast notification for task status toggle
    toast.info('Task status updated');
  };

  // Function to handle the editing of a task
  const handleEdit = () => {
    if (isEditing) {
      dispatch(editTask({ id: task.id, text: editedText }));
      // Show a toast notification for task edit
      toast.success('Task edited successfully');
    }
    setIsEditing(!isEditing); // Toggle the editing state
  };

  return (
    <>
      <li style={{ marginTop: "1.5rem" }}>
        <div className='col-sm-6 col-lg-12 col-md-12'>
          {/* Checkbox to toggle task completion */}
          <input 
            type="checkbox" 
            checked={task.completed} 
            onChange={handleToggle} 
          />
          {isEditing ? (
            // Input field to edit task text
            <input 
              type="text" 
              value={editedText} 
              onChange={(e) => setEditedText(e.target.value)} 
            />
          ) : (
            // Display the task text with a strikethrough if completed
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.text}
            </span>
          )}
        </div>
        {/* Button to toggle edit/save mode */}
        <button onClick={handleEdit} class="btn btn-secondary" style={{ margin: '0.2rem' }}>
          {isEditing ? 'Save' : 'Edit'}
        </button>
        {/* Button to delete the task */}
        <button onClick={handleDelete} class="btn btn-danger" style={{ margin: "0.2rem" }}>Delete</button>
      </li>
      
    </>
  );
};

export default TaskItem;
