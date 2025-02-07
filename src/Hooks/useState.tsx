// import React from 'react';

import { useState } from "react";
import Composition from "../Composition/Composition";

// interface Component {
//   name: string;
//   email: string;
// }

const USESTATE: React.FunctionComponent = () => {
  //For Counting
  const [count, setCount] = useState<number>(0);

  //to Changing Names
  const [name, setName] = useState<string | null>(
    "Waiting for button Clicked ...."
  );

  //to test input tag and onChange event
  const [text, setText] = useState<string>();

  // to Checking Form
  const [formData, setFormData] = useState<{ [key: string]: string }>({});

  // onClick Event on Mouse
  const HandleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setCount(count + 1);
    setName("Click Count Increases");
  };
  const HandleClickForDecrement = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setCount(count - 1);
    setName("Click Count decreases");
  };

  const HandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.currentTarget.value);
  };

  const HandleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.currentTarget.name]: event.currentTarget.value,
    });
  };

  const HandleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(formData);
    setFormData({});
  };

  return (
    <>
      {/* This is Just The Begning Guys */}
      <h1>Hello this is usestate component</h1>

      {/* Name Related Thing */}
      <h2>{name}</h2>

      {/* Count with Inc. and Dec. */}
      <div className="mb-10 bg-blue-400">
        <h2>Count is {count}</h2>
        <button onClick={HandleClick}>Increment</button>
        <button onClick={HandleClickForDecrement}>Decrement</button>
      </div>

      {/* Now Handeling Input things */}
      <div className="m-10 flex gap-5 flex-col justify-center items-center">
        <span className="mx-4">{text}</span>
        <input
          type="text"
          placeholder="Enter Something"
          className="border-4 w-60 h-10"
          value={text}
          onChange={HandleChange}
        />
      </div>

      <Composition
        formData={formData}
        HandleFormChange={HandleFormChange}
        HandleSubmit={HandleSubmit}
      />
      {/* Time to Handle Forms */}
    </>
  );
};

export default USESTATE;
