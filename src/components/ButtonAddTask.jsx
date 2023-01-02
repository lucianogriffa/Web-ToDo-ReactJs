import { useToDoContext } from '../context/Context';
const ButtonAddTask = ({handleButton}) => {
  const { state } = useToDoContext();
  const ButtonAdd = () => {
    return <button onClick={handleButton} className="btn btn-outline btn-accent mt-1">Add Task</button>
  }
  const ButtonDisable= () => {
    return <button disabled className="btn btn-outline btn-accent mt-1">Total Tasks Allowed</button>
  }
  return <>{state.task.length <= 9 ? <ButtonAdd/> : <ButtonDisable/>}</>
};
export default ButtonAddTask;