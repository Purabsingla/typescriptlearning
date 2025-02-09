import React, { useCallback, useState } from "react";

const UseCallBack: React.FC = () => {
  const [count, setCount] = React.useState<number>(0);
  const [text, setText] = useState<string>();
  const HandleCLick = useCallback(
    (event: React.MouseEvent<HTMLButtonElement>) => {
      setCount(count + 1);
    },
    [count]
  );

  const HandleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setText(event.currentTarget?.value);
    },
    []
  );

  return (
    <div>
      <h1 className="text-3xl">UseCallBack</h1>
      <p>
        useCallback is a React Hook that memoizes functions to prevent
        unnecessary re-creation on every render. It helps optimize performance
        by ensuring that a function reference remains the same unless its
        dependencies change.
      </p>
      <p>
        In React, functions inside components are re-created on every render.
        This can cause performance issues when passing functions as props to
        child components. ✅ useCallback is useful when:
      </p>
      <ol>
        <li>
          You need to create a memoized version of a function that has
          dependencies
        </li>
        <li>
          You want to optimize performance by avoiding unnecessary re-renders
        </li>
        <li>
          You want to create a memoized version of a component for better
          performance
        </li>
      </ol>
      <button type="button" className="bg-orange-400" onClick={HandleCLick}>
        Count clicked {count} times
      </button>
      <input
        type="text"
        placeholder="Enter something"
        className="border-2 border-spacing-8 border-red-600 ml-10"
        onChange={HandleChange}
      />
      <p>text you entered is : {text}</p>
    </div>
  );
};

export default UseCallBack;
