import React from "react";
import "./App.css";
import USESTATE from "./Hooks/useState";
import UseEffect from "./Hooks/UseEffect";
import UseRef from "./Hooks/UseRef";

const App: React.FC = () => {
  return (
    <div className="App">
      <USESTATE />
      <UseEffect />
      <UseRef />
    </div>
  );
};

export default App;
