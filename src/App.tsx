import React from "react";
import "./App.css";
import USESTATE from "./Hooks/useState";
import UseEffect from "./Hooks/UseEffect";
import UseRef from "./Hooks/UseRef";
import UseMemo from "./Hooks/UseMemo";
import UseCallBack from "./Hooks/UseCallBack";
import { UseContext } from "./context/ContextProvider";
import ThemeButton from "./context/ThemeButton";

const App: React.FC = () => {
  return (
    <div className="App my-10">
      <USESTATE />
      <UseEffect />
      <UseRef />
      <UseMemo />
      <UseCallBack />
      <UseContext>
        <ThemeButton />
      </UseContext>
    </div>
  );
};

export default App;
