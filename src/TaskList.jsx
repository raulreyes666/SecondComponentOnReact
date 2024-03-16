
import React from 'react';
import Task from './Task';

const TaskList = ({ tasks, handleTaskToggle }) => {
  return (
    <div>
      {tasks.map(task => (
        <Task key={task.id} task={task} handleTaskToggle={handleTaskToggle} />
      ))}
    </div>
  );
};

export default TaskList;
