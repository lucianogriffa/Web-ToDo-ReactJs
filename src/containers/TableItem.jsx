import { useState } from 'react';
import { useToDoContext } from '../context/Context';
const TableItem = ({task, key}) => {
	const { removeTask } = useToDoContext();
  const handleRemove = task => {
		removeTask(task);
	};
  return (
    <div className='flex flex-raw flex-wrap justify-between items-center content-center
    bg-background w-4/5 h-12
    border-gray-700	border-2	border-solid rounded-lg
    mt-1 mb-1
    p-4
    '>
      <input type="checkbox" className="checkbox" />
      <p className="font-bold">{task}</p>
      <button className="font-bold">X</button>
    </div>
  )
}
export default TableItem;