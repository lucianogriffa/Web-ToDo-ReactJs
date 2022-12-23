import { useToDoContext } from "../context/Context";
import TableItem from "./TableItem";
const Table = () => {
  const { state } = useToDoContext()
  return (
    <div className="flex overflow-x-auto justify-center items-center align-middle w-full mt-4">
      <table className="table table-zebra w-3/4">
        <thead>
          <tr>
            <th>Tasks</th>
          </tr>
        </thead>
        <tbody>
          {state.task.map(task => (
            <TableItem key={task.id} task={task} />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table