import React, { useState } from "react";
import "./taxs.css";
import Tax from "./tax/tax";
const Taxs = ({ data }) => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const handleInputChange1 = (e) => {
    setInput1(e.target.value);
  };

  const handleInputChange2 = (e) => {
    setInput2(e.target.value);
  };

  const [taxs, setTaxs] = useState([]);

  const addTaxs = () => {
    const newTax = { name: input1, percent: input2, value: data };
    setTaxs([...taxs, newTax]);
    console.log(taxs);
  };
  const deleteTax = (index) => {
    const updatedTaxs = [...taxs];
    updatedTaxs.splice(index, 1);
    setTaxs(updatedTaxs);
  };
  return (
    <div className="taxs">
      <div className="container">
        <input
          type="text"
          name="name"
          className="inputname"
          value={input1}
          onChange={handleInputChange1}
          placeholder="name"
        />
        <input
          type="number"
          className="percent"
          value={input2}
          onChange={handleInputChange2}
          placeholder="5%"
        />
        <button onClick={addTaxs}>Create</button>
      </div>
      {taxs.map((tax, i) => (
        <div key={i} className="tax">
          <Tax name={tax.name} percent={tax.percent} value={tax.value} />
          <button onClick={() => deleteTax(i)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Taxs;
