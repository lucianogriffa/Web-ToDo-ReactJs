// Context
import Context from "./context/Context";
// Components
import TaskGlobal from "./containers/TaskGlobal";
import Table from "./containers/Table";
import CleanTasksButton from "./components/CleanTasksButton";
function App() {
  return (
    <Context>
      <div className="flex flex-col flex-wrap	justify-center items-center content-center">
        <TaskGlobal/>
        <Table/>
        <CleanTasksButton/>
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