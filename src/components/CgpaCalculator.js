import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import GpaCalculatorInput from "./GpaCalculatorInput";
// import "./gpaCalculator.css";
import { Header } from "./Header";
import { setCgpa } from "../actions/cgpa";

const CgpaCalculator = () => {
  let gpa = useSelector((state) => state.gpa);

  if (gpa != null) {
    gpa = `{Your Calculated GPA-> ${gpa} }`;
  } else {
    gpa = "";
  }

  const dispatch = useDispatch();
  const calculateCgpa=()=>{
    let credsCompleted=parseFloat(document.getElementById('credsCompleted').value);
    let currentCgpa=parseFloat(document.getElementById('currentCgpa').value);
    let credsTaken=parseFloat(document.getElementById('credsTaken').value);
    let gpaThisSem=parseFloat(document.getElementById('gpaThisSem').value);

    if(credsCompleted<0||credsCompleted>180||currentCgpa<0||currentCgpa>10||credsTaken<0||credsTaken>27||gpaThisSem<0||gpaThisSem>10){
      alert("Please enter Values within given Limits!");
    }
    else if(credsCompleted==''||credsCompleted==null||currentCgpa==''||currentCgpa==null||credsTaken==''||credsTaken==null||gpaThisSem==''||gpaThisSem==null){
      alert("Please enter all 4 Values!")
    }else{
      let cgpa=(credsCompleted*currentCgpa+credsTaken*gpaThisSem)/(credsCompleted+credsTaken);
      cgpa=cgpa.toFixed(2);
      document.getElementById("cgpaResult").innerHTML = "CGPA : " + cgpa;
      
       dispatch(setCgpa(cgpa));
    }
    
    console.log(credsCompleted);
  }


  return (
    <div>
      <Header></Header>
      <div className="content-container">
        <h3 className="title">CGPA CALCULATOR</h3>
        <div className="cgpa-input-group">
          <div className="cgpa-calculator-inputs">
            <input
              type="number"
              id="credsCompleted"
              min={0}
              max={180}
              className="cgpa-calculator-input"
              placeholder="Credits Completed"
              onChange={(e) => {
                console.log(e);
              }}
            />
            <h4 className="cgpa-calculator-subscript">Maximum 180</h4>
            <input
              type="number"
              id="currentCgpa"
              min={0}
              max={10}
              className="cgpa-calculator-input"
              placeholder="Current CGPA"
              onChange={(e) => {
                console.log(e);
              }}
            />
            <h4 className="cgpa-calculator-subscript">Maximum 10</h4>
            <input
              type="number"
              min={0}
              max={27}
              id="credsTaken"
              className="cgpa-calculator-input"
              placeholder="Credits taken this semester"
              onChange={(e) => {
                console.log(e);
              }}
            />
            <h4 className="cgpa-calculator-subscript">Maximum 27</h4>
            <input
              type="number"
              id="gpaThisSem"
              min={0}
              max={10}
              className="cgpa-calculator-input"
              placeholder={`GPA of this semester ${gpa}`}
              onChange={(e) => {
                console.log(e);
              }}
            />
            <h4 className="cgpa-calculator-subscript">Maximum 10</h4>
          </div>
          <button className="cgpaCalculateButton" onClick={calculateCgpa}>CALCULATE</button>
          <span id="cgpaResult" className="gpaResult"></span>
        </div>
      </div>
    </div>
  );
};

export default CgpaCalculator;
