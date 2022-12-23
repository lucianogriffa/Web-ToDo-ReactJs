import { useState } from "react";

const Input = () => {
  const [content, setContent] = useState(" ");

  const handleInput = event => {
    setContent(event.target.value);
  };
  const handleButton = () => {
    console.log(content);
  };
  return (
    <div className="flex justify-center items-center align-middle mt-4">
      <div className="form-control w-full max-w-xs mr-2">
        <label className="label">
          <span className="label-text">Write a Task</span>
        </label>
        <input onChange={handleInput} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
        <label className="label">
          <span className="label-text-alt">Then press the button to add it.</span>
        </label>
      </div>
      <button onClick={handleButton} className="btn btn-outline btn-accent">Add Task</button>
    </div>
  );
}
export default Input;