// Context
import Context from "./context/Context";
// Components
import TaskGlobal from "./containers/TaskGlobal";
import Table from "./containers/Table";
import Footer from "./components/Footer";
function App() {
  return (
    <Context>
      <div className="flex flex-col flex-wrap	justify-center items-center content-center bg-background font-fontTheme h-screen">
        <div className="flex flex-raw flex-wrap	justify-between	items-center content-center p-3 ">
          <h1 className="text-3xl">📌 To Do App</h1>
        </div>
        <TaskGlobal/>
        <Table/>
      </div>
      <Footer/>
    </Context>
  );
}
export default App;