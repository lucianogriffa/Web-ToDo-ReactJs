import { useToDoContext } from "../context/Context";
import TableItem from "./TableItem";
import CleanTasksButton from "../components/CleanTasksButton";
import TasksStates from "../components/TasksStates";
import CountItems from "../components/CountItems";
const Table = () => {
  const { tasks } = useToDoContext();
  return (
    <>
      <div className="flex flex-column flex-wrap justify-center items-center content-center bg-background w-2/4">
        {tasks.map(task => (
          <TableItem key={task.id} task={task} />
        ))}
      </div>
      <div className="flex flex-raw flex-wrap	justify-center items-center content-center">
        <CountItems/>
        <TasksStates/>
        <CleanTasksButton/>
      </div>
    </>
  )
}
export default Table;