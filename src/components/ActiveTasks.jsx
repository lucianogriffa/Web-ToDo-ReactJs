import React from 'react';
import { useToDoContext } from '../context/Context';
const ActiveTasks = () => {
  const { showActiveTasks } = useToDoContext();
  return (
    <div className='mr-2 ml-2'>
      <button className="btn btn-info" onClick={() => showActiveTasks()}>Active</button>
    </div>
  )
};
export default ActiveTasks;