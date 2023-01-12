import React from 'react';
import { useToDoContext } from '../context/Context';
const CountItems = () => {
  const { tasks } = useToDoContext();
  return (
    <div className='m-4'>
      <p>{tasks.length} items left</p>
    </div>
  )
};
export default CountItems;