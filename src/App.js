import "./App.css";
import React, { useState } from "react";
import Calculator from "./components/calculator/calculator";
import Taxs from "./components/taxs/taxs";

function App() {
  const [data, setData] = useState("");
  const handleDataChange = (newData) => {
    setData(newData);
  };
  return (
    <div className="App">
      <Calculator changeData={handleDataChange} />
      <Taxs data={data} />
    </div>
  );
}

export default App;
