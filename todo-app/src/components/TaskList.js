import React from 'react';
import { useSelector } from 'react-redux';
import TaskItem from './TaskItem';

const TaskList = () => {
  const tasks = useSelector((state) => state.tasks.tasks);

  return (
    <center><ol style={{paddingRight:'0rem'}}>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} style={{paddingLeft:'0rem'}}/>
      ))}
    </ol></center>
  );
};

export default TaskList;
