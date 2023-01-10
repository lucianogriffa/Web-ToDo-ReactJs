import { useToDoContext } from '../context/Context';
const ButtonAddTask = ( { handleButton } ) => {
  const { state } = useToDoContext();
  const ButtonAdd = () => {
    return <button onClick={handleButton} className="btn btn-outline btn-accent w-12 mr-2">+</button>
  }
  const ButtonDisable= () => {
    return <button disabled className="btn btn-outline btn-accent mt-1">Total Tasks Allowed</button>
  }
  return (
    <div>
      {state.task.length >= 0 ? <ButtonAdd/> : <ButtonDisable/>}
    </div>
  )
};
export default ButtonAddTask
