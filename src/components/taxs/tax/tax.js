import React from "react";
import "./tax.css";
const Tax = ({ name, percent, value }) => {
  return (
    <div className="taxx">
      <h3>{name}</h3>
      <p>
        {value}-{percent}%={(value * (100 - percent)) / 100}
      </p>
    </div>
  );
};
export default Tax;
