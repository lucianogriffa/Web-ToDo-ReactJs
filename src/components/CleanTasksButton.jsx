import React from 'react';
import { useToDoContext } from '../context/Context';
const CleanTasksButton = () => {
  const { cleanTask } = useToDoContext();
  return (
    <div className='mt-4'>
      <button className="btn btn-warning" onClick={cleanTask}>Delete All Tasks</button>
    </div>
  )
};
export default CleanTasksButton;