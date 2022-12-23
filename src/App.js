// Context
import Context from "./context/Context";
// Components
import Input from "./components/Input";
import Table from "./components/Table";

function App() {
  return (
    <Context>
      <Input/>
      <Table/>
    </Context>
  );
}
export default App;