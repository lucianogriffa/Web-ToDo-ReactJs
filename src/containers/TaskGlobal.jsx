import { useState } from "react";
import { useToDoContext } from "../context/Context";
import ButtonAddTask from '../components/ButtonAddTask';
const TaskGlobal = () => {
  const [title, setTitle] = useState('');
  const { addToTaskList } = useToDoContext();
  const handleAddTodo = (e) => {
    addToTaskList(title);
    setTitle('');
  }
  return (
    <div className="flex justify-center items-center align-middle mt-4 bg-background w-2/4 p-3">
      <ButtonAddTask handleButton={handleAddTodo} />
      <input 
        onChange={(e) => setTitle(e.target.value)}
        type="text" 
        placeholder="Type here" 
        className="input input-bordered w-3/4"
      />
    </div>
  );
}
export default TaskGlobal;
