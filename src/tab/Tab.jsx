import React, { useState } from "react";
import "./Tab.css";
const Tab = () => {
  const [count, setCount] = useState(1);
  return (
    <>
      <div className="tabs-box">
        <button
          className={count == 1 && "bg-color"}
          onClick={() => setCount(1)}
        >
          Home
        </button>
        <button
          className={count == 2 && "bg-color"}
          onClick={() => setCount(2)}
        >
          About
        </button>
        <button
          className={count == 3 && "bg-color"}
          onClick={() => setCount(3)}
        >
          Team
        </button>
        <button
          className={count == 4 && "bg-color"}
          onClick={() => setCount(4)}
        >
          Contact
        </button>
      </div>
      <div className="contents-box">
        {count == 1 && <p>HOME sehifesi </p>}
        {count == 2 && <p>About sehifesi</p>}
        {count == 3 && <p>Team sehifesi</p>}
        {count == 4 && <p>Contact sehifesi</p>}
      </div>
    </>
  );
};

export default Tab;
