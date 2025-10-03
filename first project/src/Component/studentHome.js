import { useContext } from "react";
import studentContext from "./studentContext";

export default function studentHome() {
  const studentData = useContext(studentContext);

  return (
    <div>
      <h1>Student Information</h1>
      <h2>Welcome to {studentData.name} {studentData.name2}</h2>
    </div>
  );
}
