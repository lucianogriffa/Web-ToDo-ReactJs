import { useToDoContext } from "../context/Context";
const TableItem = ( { task } ) => {
  const { 
    completedTasks,
    removeTask
  } = useToDoContext();
  const { id, title, completed } = task;
  return (
    <div className='flex flex-raw flex-wrap justify-between items-center content-center bg-background w-4/5 h-12 border-gray-700 m-5	border-2	border-solid rounded-lg mt-1 mb-1 p-4'>
      {
        completed ? (
          <div onClick={() => completedTasks(id)} className="bg-green-700 p-1 rounded-full cursor-pointer">
            <img
              className="h-4 w-4 " src="/check-icon.svg" alt="Check Icon"
            />
          </div>
        )
        : (
          <span onClick={() => completedTasks(id)} className={`border border-gray-500 border-solid p-3 rounded-full cursor-pointer`}>
          </span>
        )
      }
      <p className="font-bold">{title}</p>
      <button className="font-bold" onClick={() => removeTask(id)}>X</button>
    </div>
  )
}
export default TableItem;
// <input type="checkbox" className="checkbox" onClick={handleSetComplete}/>