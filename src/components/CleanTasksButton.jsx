import React from 'react';
import { useToDoContext } from '../context/Context';
const CleanTasksButton = () => {
  const { cleanTasksCompleted } = useToDoContext();
  return (
    <div className='m-4'>
      <button className="btn btn-warning" onClick={() => cleanTasksCompleted()}>Clear Completed</button>
    </div>
  )
};
export default CleanTasksButton;