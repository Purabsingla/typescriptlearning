import React, { useEffect, useState } from "react";

const UseEffect: React.FC = () => {
  const [name, setName] = useState<string>(
    "Something is comes with help of useEffect in 6 seconds"
  );

  const [autoCount, setAutoCount] = useState<number>(0);

  useEffect(() => {
    setTimeout(() => {
      setName("Hello World");
    }, 6000);
  }, []);

  useEffect(() => {
    const AutoCount = setInterval(() => {
      setAutoCount(autoCount + 1);
    }, 1000);
    return () => clearInterval(AutoCount);
  }, [autoCount]);

  const [show, setShow] = useState(true);
  return (
    <div>
      <h1>UseEffect We Are now Trying to Run UseEffect</h1>
      <h1>{name}</h1>
      <span>{autoCount} seconds is time you using this site </span>
      <div className="mt-4">
        <p className="text-2xl font-bold">
          This is just a feature of mutation and unmutation
        </p>
        <button onClick={() => setShow(!show)}>Toggle Timer</button>
        {show && <TimerComponent />}
      </div>
    </div>
  );
};

export default UseEffect;

const TimerComponent: React.FC = () => {
  useEffect(() => {
    const timer = setInterval(() => {
      console.log("⏳ Timer is running...");
    }, 1000);

    return () => {
      clearInterval(timer); // Cleanup function
      console.log("❌ Timer Stopped (Component Unmounted)");
    };
  }, []);

  return <h2>Timer is running...</h2>;
};
