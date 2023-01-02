import { useState } from 'react';
import { useToDoContext } from '../context/Context';
const TableItem = ({task, key}) => {
	const { removeTask } = useToDoContext();
  const handleRemove = task => {
		removeTask(task);
	};
  return (
    <tr >
      <td className='bg-black-simple'>
        <div className="flex items-center space-x-3">
          <div>
            <div className="font-bold"><input type="checkbox" className="checkbox" /></div>
          </div>
        </div>
      </td>
      <td className='bg-black-simple'>
        <div className="flex items-center space-x-3">
          <div>
            <div className="font-bold">{task}</div>
          </div>
        </div>
      </td>
    </tr>
  )
}
export default TableItem;