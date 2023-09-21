import React, { useState } from "react";
// import Buttonn from "./buttons/buttons";
import "./calculator.css";

function Calculator({ changeData }) {
  const [valuee, setValue] = useState("");

  const handleButtonClick = (e) => {
    const value = e.target.value;
    if (value === "=") {
      setValue(eval(valuee));
      changeData(eval(valuee));
    } else if (value === "C") {
      setValue("");
    } else {
      setValue(valuee + value);
    }
  };

  return (
    <div className="calc">
      <input
        type="text"
        className="input"
        value={valuee}
        onChange={(e) => setValue(e.target.value)}
        autoFocus
      />

      <div className="buttons">
        {[1, 2, 3, "+", 4, 5, 6, "-", 7, 8, 9, "*", ".", 0, "C", "/", "="].map(
          (num) => (
            <button
              className={num === "=" ? "button  equals" : "button"}
              key={num}
              onClick={handleButtonClick}
              value={num}
            >
              {num}
            </button>
          )
        )}
      </div>
    </div>
  );
}
export default Calculator;
