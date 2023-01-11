// Context
import Context from "./context/Context";
// Components
import TaskGlobal from "./containers/TaskGlobal";
import Table from "./containers/Table";
import CleanTasksButton from "./components/CleanTasksButton";
import TasksStates from "./components/TasksStates";
import CountItems from "./components/CountItems";
function App() {
  return (
    <Context>
      <div className="flex flex-col flex-wrap	justify-center items-center content-center pt-10 bg-background">
        <div className="flex flex-raw flex-wrap	justify-between	items-center content-center p-5 ">
          <h1>TO DO</h1>
        </div>
        <TaskGlobal/>
        <Table/>
        <div className="flex flex-raw flex-wrap	justify-center items-center content-center">
          <CountItems/>
          <TasksStates/>
          <CleanTasksButton/>
        </div>
      </div>
    </Context>
  );
}
export default App;

/*
display: flex;
flex-direction: column;
flex-wrap: wrap;
justify-content: center;
align-items: center;
align-content: center;
*/