import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { deleteTask, editTask, toggleTask } from '../features/tasks/tasksSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TaskItem = ({ task }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(task.text);
  const dispatch = useDispatch();

  const handleDelete = () => {
   
    dispatch(deleteTask(task.id),);

   

   
  };

  const handleToggle = () => {
    dispatch(toggleTask(task.id));
  };

  const handleEdit = () => {
    if (isEditing) {
      dispatch(editTask({ id: task.id, text: editedText }));
    }
    setIsEditing(!isEditing);
  };

  return (
    <>
    <li style={{marginTop:"1.5rem"}}>
      <input 
        type="checkbox" 
        checked={task.completed} 
        onChange={handleToggle} 
      />
      {isEditing ? (
        <input 
          type="text" 
          value={editedText} 
          onChange={(e) => setEditedText(e.target.value)} 
        />
      ) : (
        <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
          {task.text}
        </span>
      )}
      <button onClick={handleEdit} class="btn btn-secondary" style={{margin:'0.5rem'}}>
        {isEditing ? 'Save' : 'Edit'}
      </button>
      <button onClick={handleDelete} class="btn btn-danger" style={{margin:"0.5rem"}}>Delete</button>
    </li>
    <ToastContainer/>
    </>
  );
};

export default TaskItem;
