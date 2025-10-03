import { useState, useEffect } from "react";

export default function UseEffectExample() {
  const [price, setPrice] = useState(0);
  const [calculateRate, setCalculateRate] = useState(1);

  useEffect(() => {
    console.log("useEffect HOOK IS CALLED");
    setCalculateRate(price * 20);
  }, [price]);

  return (
    <div>
      <input
        type="button"
        onClick={() => setPrice((prev) => prev + 20)}
        value="click"
      />
      <p>Price: {price}</p>
      <p>Calculated Rate: {calculateRate}</p>
    </div>
  );
}
