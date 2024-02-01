import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="container">
        <div className="count">{count}</div>
        <button
          className="in-btn btn"
          onClick={() => {
            setCount(count + 1);
          }}
        >
          INCREASE
        </button>
        <button
          className="de-btn btn"
          onClick={() => {
            if (count > 0) {
              setCount(count - 1);
            }
          }}
        >
          DECREASE
        </button>
      </div>
    </>
  );
}

export default App;
