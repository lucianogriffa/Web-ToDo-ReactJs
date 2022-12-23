import { useState } from "react";
import { useToDoContext } from "../context/Context";

const Input = () => {
  const [content, setContent] = useState("");
  const [id, setId] = useState(1);
  const { state, addToTaskList } = useToDoContext();
  const handleInput = event => {
    setId(id + 1);
    setContent(event.target.value);
  };
  const handleButton = () => {
    console.log(content);
    addToTaskList(content, id)
  };
  const ButtonAdd = () => {
    return <button onClick={handleButton} className="btn btn-outline btn-accent">Add Task</button>
  }
  const ButtonDisable= () => {
    return <button disabled className="btn btn-outline btn-accent">Total Tasks Allowed</button>
  }
  return (
    <div className="flex justify-center items-center align-middle mt-4">
      <div className="form-control w-full max-w-xs mr-2">
        <label className="label">
          <span className="label-text">Write a Task</span>
        </label>
        <input onChange={handleInput} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
        <label className="label">
          <span className="label-text-alt">Then press the button to add it.</span>
          <span className="label-text-alt">Max. 10 Task</span>
        </label>
      </div>
      {state.task.length <= 9 ? <ButtonAdd/> : <ButtonDisable/>}
    </div>
  );
}
export default Input;