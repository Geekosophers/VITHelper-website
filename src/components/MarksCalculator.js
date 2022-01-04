import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import GpaCalculatorInput from "./GpaCalculatorInput";
// import "./gpaCalculator.css";
import { Header } from "./Header";
import { setCgpa } from "../actions/cgpa";

const MarksCalculator = () => {
  

  const dispatch = useDispatch();
  const calculateMarks=()=>{
    
  }


  return (
    <div>
      <Header></Header>
      <div className="content-container">
        <h3 className="title">MARKS CALCULATOR</h3>
        <div className="cgpa-input-group">
          <div className="cgpa-calculator-inputs">
            <input
              type="number"
              id="cat1"
              min={0}
              max={180}
              className="cgpa-calculator-input"
              placeholder="Marks in CAT1"
              onChange={(e) => {
                console.log(e);
              }}
            />
            <h4 className="cgpa-calculator-subscript">Maximum 30</h4>
            <input
              type="number"
              id="cat2"
              min={0}
              max={10}
              className="cgpa-calculator-input"
              placeholder="Marks in CAT2"
              onChange={(e) => {
                console.log(e);
              }}
            />
            <h4 className="cgpa-calculator-subscript">Maximum 30</h4>
            <input
              type="number"
              min={0}
              max={27}
              id="internals"
              className="cgpa-calculator-input"
              placeholder="Marks in Internals"
              onChange={(e) => {
                console.log(e);
              }}
            />
            <h4 className="cgpa-calculator-subscript">Maximum 20</h4>
            <input
              type="number"
              id="fat"
              min={0}
              max={10}
              className="cgpa-calculator-input"
              placeholder={`Expected Marks in FAT`}
              onChange={(e) => {
                console.log(e);
              }}
            />
            <h4 className="cgpa-calculator-subscript">Maximum 60</h4>
            <input
              type="number"
              id="lab"
              min={0}
              max={10}
              className="cgpa-calculator-input"
              placeholder={`Marks in LAB`}
              onChange={(e) => {
                console.log(e);
              }}
            />
            <h4 className="cgpa-calculator-subscript">Maximum 100</h4>
            <input
              type="number"
              id="project"
              min={0}
              max={10}
              className="cgpa-calculator-input"
              placeholder={`Marks in Project `}
              onChange={(e) => {
                console.log(e);
              }}
            />
            <h4 className="cgpa-calculator-subscript">Maximum 100</h4>
            <input
              type="number"
              id="additionalLearning"
              min={0}
              max={10}
              className="cgpa-calculator-input"
              placeholder={`Marks in Additional Learning `}
              onChange={(e) => {
                console.log(e);
              }}
            />
            <h4 className="cgpa-calculator-subscript">Maximum 10</h4>
          </div>
          <button className="cgpaCalculateButton" onClick={calculateMarks}>CALCULATE</button>
          <span id="cgpaResult" className="gpaResult"></span>
        </div>
      </div>
    </div>
  );
};

export default MarksCalculator;
