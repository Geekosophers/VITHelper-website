import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { Header } from "./Header";
import { setCgpa } from "../actions/cgpa";
import { MatPaperButton } from "./MatPaperButton";
import CalculatorTextInput from "./CalculatorTextInput";

import InputParams from "../constants";

let calculate = InputParams.calculateCgpa;
let inputParameters = InputParams.cgpaInputParams;

const CgpaCalculator = () => {
  let gpa = useSelector((state) => state.gpa);

  if (gpa != null) {
    gpa = `{Your Calculated GPA-> ${gpa} }`;
  } else {
    gpa = "";
  }
  const dispatch = useDispatch();
  const calculateHelper = () => {
    let cgpa = calculate();
    if (cgpa != null) dispatch(setCgpa(cgpa));
  };
  return (
    <div>
      <Header></Header>
      <MatPaperButton />
      <div className="content-container">
        <h3 className="title">CGPA CALCULATOR</h3>
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
          <button
            className="cgpaCalculateButton"
            onClick={() => calculateHelper()}
          >
            CALCULATE
          </button>
          <span id="cgpaResult" className="gpaResult"></span>
        </div>
      </div>
    </div>
  );
};

export default CgpaCalculator;
