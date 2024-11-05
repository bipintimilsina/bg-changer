import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("yellow");

  return (
    <>
      <div
        className=" w-full h-screen duration-200 flex justify-center items-end"
        style={{ backgroundColor: color }}

      >
        <div className="m-10">
          <div className="flex flex-wrap bg-white shadow-lg gap-3 p-3 rounded-lg text-white">
            <button
              className="bg-green-400 outline-none rounded-full p-2 shadow-lg"
              style={{ backgroundColor: "green" }}
              onClick={()=>{setColor('green')}}
            >
              Green
            </button>

            <button
              className=" outline-none rounded-full p-2 shadow-lg"
              style={{ backgroundColor: "skyblue" }}
              onClick={()=>{setColor("skyblue")}}
            >
              Skyblue
            </button>
            <button
              className=" outline-none rounded-full p-2 shadow-lg"
              onClick={()=>{setColor('red')}}
              style={{ backgroundColor: "red" }}
            >
              Red
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
