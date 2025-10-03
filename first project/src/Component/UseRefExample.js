import React, { useRef } from "react";

export default function UseRefExample() {
  const inputRef = useRef(null);

  const focusInput = () => {
    // Focus the input box when button is clicked
    inputRef.current.focus();
  };

  const changeBackground = () => {
    // Change background color of input
    inputRef.current.style.backgroundColor = "lightyellow";
  };

  return (
    <div>
      <h2>useRef Hook Example</h2>
      <input type="text" ref={inputRef} placeholder="Type here..." />
      <br /><br />
      <button onClick={focusInput}>Focus Input</button>
      <button onClick={changeBackground}>Change Background</button>
    </div>
  );
}
