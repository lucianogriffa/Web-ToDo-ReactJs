import React from 'react';
import { useToDoContext } from '../context/Context';
const AllTasks = () => {
  const { showAllTasks } = useToDoContext();
  return (
    <div className='mr-2 ml-2'>
      <button className="btn btn-info" onClick={() => showAllTasks()}>All</button>
    </div>
  )
};
export default AllTasks;