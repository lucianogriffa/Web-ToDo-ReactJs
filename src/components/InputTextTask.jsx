const InputTextTask = ({handleInput}) => {
  return (
    <div className="form-control w-full max-w-xs mr-2 ml-2">
      <label className="label">
        <span className="label-text">Write a Task</span>
      </label>
      <input onChange={handleInput} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
      <label className="label">
        <span className="label-text-alt">Then press the button to add it.</span>
        <span className="label-text-alt">Max. 10 Task</span>
      </label>
    </div>
  )
}
export default InputTextTask;