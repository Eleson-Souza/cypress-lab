import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { LoginButton } from "./components/LoginButton";

function App() {
  const [count, setCount] = useState(0);

  function handleChangeCounter(event: React.ChangeEvent<HTMLInputElement>) {
    const { value } = event.target;

    const counter = value ? Number(value) : 0;
    setCount(counter);
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <p>
          <input
            type="number"
            value={count !== 0 ? count : ""}
            className="counter-input"
            data-cy="counter-input"
            onChange={handleChangeCounter}
          />
        </p>

        <button
          data-cy="btn-counter-plus"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>

      <LoginButton />
    </>
  );
}

export default App;
