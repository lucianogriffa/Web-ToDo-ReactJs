import React from 'react';
import { useToDoContext } from '../context/Context';
const CompletedTasks = () => {
  const { showCompletedTasks } = useToDoContext();
  return (
    <div className='mr-2 ml-2'>
      <button className="btn btn-info" onClick={() => showCompletedTasks()}>Completed</button>
    </div>
  )
};
export default CompletedTasks;