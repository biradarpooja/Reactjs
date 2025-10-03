import { useState } from "react";
import studentContext from "./studentContext";

export default function StudentContextCom(props) {
  const name = "Biradar";
  const name2 = "Pooja";
  const [student, setStudent] = useState([]);

  return (
    <studentContext.Provider value={{ name, name2, student, setStudent }}>
      {props.children}
    </studentContext.Provider>
  );
}
