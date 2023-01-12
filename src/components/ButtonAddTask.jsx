import { useToDoContext } from '../context/Context';
const ButtonAddTask = ( { handleButton } ) => {
  const { tasks } = useToDoContext();
  const ButtonAdd = () => {
    return <button onClick={handleButton} className="btn btn-outline btn-accent w-12 mr-2">➕</button>
  }
  const ButtonDisable= () => {
    return <button disabled className="btn btn-outline btn-accent mr-2">Total (6)</button>
  }
  return (
    <div>
      {tasks.length <= 7 ? <ButtonAdd/> : <ButtonDisable/>}
    </div>
  )
};
export default ButtonAddTask;
