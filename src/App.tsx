import React from "react";
import "./App.css";
import USESTATE from "./Hooks/useState";
import UseEffect from "./Hooks/UseEffect";
import UseRef from "./Hooks/UseRef";
import UseMemo from "./Hooks/UseMemo";
import UseCallBack from "./Hooks/UseCallBack";

const App: React.FC = () => {
  return (
    <div className="App my-10">
      <USESTATE />
      <UseEffect />
      <UseRef />
      <UseMemo />
      <UseCallBack />
    </div>
  );
};

export default App;
