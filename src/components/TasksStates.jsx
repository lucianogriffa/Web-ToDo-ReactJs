import React from 'react';
import { useToDoContext } from '../context/Context';
const TasksStates = () => {
  const { cleanTask } = useToDoContext();
  return (
    <div className='m-4'>
      <button className="btn btn-info" onClick={cleanTask}>Completed</button>
    </div>
  )
};
export default TasksStates;