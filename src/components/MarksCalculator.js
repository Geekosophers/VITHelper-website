import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import GpaCalculatorInput from "./GpaCalculatorInput";
// import "./gpaCalculator.css";
import { Header } from "./Header";
import { setCgpa } from "../actions/cgpa";
import CalculatorTextInput from "./CalculatorTextInput";

import InputParams from "../constants";

let inputParameters = InputParams.marksInputParams;
let calculate = InputParams.calculateMarks;
const MarksCalculator = () => {
  return (
    <div>
      <Header></Header>
      <div className="content-container">
        <h3 className="title">MARKS CALCULATOR</h3>
        <div className="cgpa-input-group">
          <div className="cgpa-calculator-inputs">
            {inputParameters.map((input) => {
              return (
                <CalculatorTextInput
                key={input.id}
                  id={input.id}
                  min={input.min}
                  max={input.max}
                  placeholder={input.placeholder}
                  subscript={input.subscript}
                />
              );
            })}
          </div>
          <button className="cgpaCalculateButton" onClick={calculate}>
            CALCULATE
          </button>
          <span id="marksResult" className="gpaResult"></span>
        </div>
      </div>
    </div>
  );
};

export default MarksCalculator;
