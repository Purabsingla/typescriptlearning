import React from "react";
import logo from "./logo.svg";
import "./App.css";
import USESTATE from "./Hooks/useState";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React With TypeScript
        </a>
      </header>
      <USESTATE />
    </div>
  );
};

export default App;
