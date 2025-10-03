import React, { useState } from "react";

export default function NameInput() {
  const [name, setName] = useState(""); // state variable

  const updateName = (event) => {
    setName(event.target.value); // update state on input
  };

  return (
    <div>
      <label>
        Name: <input type="text" onChange={updateName} />
      </label>
      <p>Your name is {name}</p>
    </div>
  );
}
