import React, { useRef } from "react";

const UseRef: React.FC = () => {
  const Ref = useRef<HTMLInputElement | null>(null);
  return (
    <div>
      <h1 className="font-extrabold text-4xl">UseRef</h1>
      <h2 className="text-2xl">
        There is no major use of useRef we can scrool to a component or div
        element or set focus to a input element or increment or decrement valuse
        withot re render and so on{" "}
      </h2>
      <input type="text" placeholder="something....." ref={Ref} />
      <button onClick={() => Ref.current?.focus()}>Set Focus Input</button>
    </div>
  );
};

export default UseRef;
