import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(15);

  const addValue = () => {
    setCounter(counter + 1);
    // console.log("value added", counter);
  };

  const removeValue = () => {
    setCounter(counter - 1);
    // console.log("value decreased", counter);
  };

  return (
    <>
      <h1>counter value :{counter} </h1>
      <button onClick={addValue}>add 1 ==={counter}</button>
      <br />
      <button onClick={removeValue}>minus 1 === {counter}</button>
    </>
  );
}

export default App;
