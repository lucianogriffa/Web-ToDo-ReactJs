import { useToDoContext } from "../context/Context";
import TableItem from "./TableItem";
const Table = () => {
  const { state } = useToDoContext();
  return (
    <div className="flex flex-column flex-wrap justify-center items-center content-center bg-background w-2/4">
      {state.task.map(task => (
        <TableItem key={task.id} task={task}  className='m-5'/>
      ))}
    </div>
  )
}
export default Table;