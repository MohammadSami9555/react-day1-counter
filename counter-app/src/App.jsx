import { useState } from "react";
import "./App.css";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="container">
      <h1 className="title">React Counter App</h1>

      <div className="card">
        <h2 className="count">{count}</h2>

        <div className="buttons">
          <button onClick={() => setCount(count + 1)}>+1</button>

          <button
            onClick={() => setCount(count - 1)}
            disabled={count === 0}
          >
            -1
          </button>

          <button className="reset" onClick={() => setCount(0)}>
            Reset
          </button>
        </div>
      </div>
    </div>
  );
}

