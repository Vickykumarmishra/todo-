import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../features/tasks/tasksSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TaskInput = () => {
  const [task, setTask] = useState('');
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

   
    if (task.trim()) {

     
      dispatch(addTask(task));
      setTask('');

    }

    

    
  };

  return (
    <form onSubmit={handleSubmit}>
     
<div class="input-group mb-3" style={{marginLeft:"0.2rem",marginRight:'0.2rem',width:'80%'}}>
  <input type="text" class="form-control" id="inputfield" aria-label="Recipient's username" aria-describedby="button-addon2"  value={task} 
        onChange={(e) => setTask(e.target.value)} 
        placeholder="Add a new task" 
        style={{marginTop:'0.5rem'}}/>
  <button  type="submit"  class="btn btn-success" style={{marginTop:'0.5rem',marginRight:"0.2rem"}} id="button-addon2">Add Task</button>
  <ToastContainer/>
</div>

    </form>
  );
};

export default TaskInput;
