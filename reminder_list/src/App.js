import { useState } from "react";
import "./App.css";
import InputBox from "./Components/InputBox/InputBox";
import List from "./Components/List/List";

function App() {
  const [data, setData] = useState([]);

  function addToList(e, text) {
    setData([...data, { id: e.timeStamp, text: text }]);
  }

  function deleteFromList(index) {
    setData([...data.slice(0, index), ...data.slice(index + 1)]);
  }

  return (
    <div id="App" className="App">
      <h1> REMINDERS </h1>
      <InputBox handleClick={addToList} />
      <List list={data} deleteFromList={deleteFromList} />
    </div>
  );
}

export default App;
