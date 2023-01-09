import React from 'react';
import { useToDoContext } from '../context/Context';
const CountItems = () => {
  const { state } = useToDoContext();
  return (
    <div className='m-4'>
      <p>{state.task.length} items left</p>
    </div>
  )
};
export default CountItems;