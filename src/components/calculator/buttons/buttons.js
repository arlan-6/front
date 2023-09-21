import React from "react";
import "./button.css";

const Buttonn = (props) => {
  return (
    <button onClick={props.onClick}>
      <div className="button" value={props.value}>
        {props.value}
      </div>
    </button>
  );
};
export default Buttonn;
