import { useState } from "react";
import { useToDoContext } from "../context/Context";
import InputTextTask from '../components/InputTextTask';
import ButtonAddTask from '../components/ButtonAddTask';
const TaskGlobal = () => {
  const [content, setContent] = useState("");
  const [id, setId] = useState(1);
  const { addToTaskList } = useToDoContext();
  const handleInput = event => {
    setId(id + 1);
    setContent(event.target.value);
  };
  const handleButton = () => {
    console.log(content);
    addToTaskList(content, id)
  };
  return (
    <div className="flex justify-center items-center align-middle mt-4">
      <InputTextTask handleInput={handleInput} />
      <ButtonAddTask handleButton={handleButton} />
    </div>
  );
}
export default TaskGlobal;
