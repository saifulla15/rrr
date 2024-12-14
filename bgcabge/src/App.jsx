import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("red");

  return (
    <div
      className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap px-2 justify-center bottom-12 inset-x-0">
        <div className="flex flex-wrap justify-center gap-5 bg-white px-3 py-2 rounded-3xl">
          <button
            className="rounded-2xl px-4 py-1"
            style={{ backgroundColor: "red" }}
          >
            Red
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
