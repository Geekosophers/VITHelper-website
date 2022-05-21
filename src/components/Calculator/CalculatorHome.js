import React, { useState } from "react";
// import "./calculatorHome.css";
import { Header } from "../Header/Header";

import { PieChart, Pie, Label } from "recharts";

import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

let gpaData = [
  { name: "Score", students: 90, fill: "#a1a1a1" },
  { name: "", students: 10, fill: "red" },
];
let cgpaData = [
  { name: "Score", students: 90, fill: "#a1a1a1" },
  { name: "", students: 10, fill: "red" },
];

const CalculatorHome = () => {
  const calculatedGpa = useSelector((state) => state.gpa);
  const calculatedCgpa = useSelector((state) => state.cgpa);
  console.log(calculatedGpa);
  if (calculatedGpa != null) {
    gpaData[0].students = parseInt(calculatedGpa) * 10;
    gpaData[1].students = (10 - parseInt(calculatedGpa)) * 10;
  }
  if (calculatedCgpa != null) {
    cgpaData[0].students = parseInt(calculatedCgpa) * 10;
    cgpaData[1].students = (10 - parseInt(calculatedCgpa)) * 10;
  }

  // const [gpa, setGpa] = useState(null);
  return (
    <div>
      <Header></Header>
      <div className="modal-page-desktop">
        <div className="content-container">
          <h3>CALCULATORS</h3>
        </div>

        <div className="content-container">
          <div className="topRow">
            <Link to="/gpaCalculator">
              <div className="gpaCard">
                {calculatedGpa != null && (
                  <>
                    <h2 className="pieHeading">GPA Calculator</h2>
                    <PieChart width={300} height={300}>
                      <Pie
                        data={gpaData}
                        dataKey="students"
                        outerRadius={95}
                        innerRadius={85}
                        fill="green"
                      >
                        <Label
                          value={calculatedGpa}
                          position="center"
                          fontSize={28}
                          fontWeight={"bolder"}
                          style={{ fill: "rgb(255,255,255)" }}
                        />
                      </Pie>
                    </PieChart>
                  </>
                )}
                {calculatedGpa == null && (
                  <h2 className="pieLabel">Use GPA Calculator</h2>
                )}
              </div>
            </Link>

            <Link to="/cgpaCalculator">
              <div className="cgpaCard">
                {calculatedCgpa != null && (
                  <>
                    <h2 className="pieHeading">CGPA Calculator</h2>
                    <PieChart width={300} height={300}>
                      <Pie
                        data={cgpaData}
                        dataKey="students"
                        outerRadius={95}
                        innerRadius={85}
                      >
                        <Label
                          value={calculatedCgpa}
                          position="center"
                          fontSize={28}
                          fontWeight={"bolder"}
                          style={{ fill: "rgb(255,255,255)" }}
                        />
                      </Pie>
                    </PieChart>
                  </>
                )}
                {calculatedCgpa == null && (
                  <h2 className="pieLabel">Use CGPA Calculator</h2>
                )}
              </div>
            </Link>
          </div>
          <div className="bottomRow">
            <Link to="/marksCalculator">
              <div className="marksCard">
                <h2 className="marksCardText">
                  Calculate total marks in a subject based on the marks from
                  various assignments
                </h2>
                <h2 className="marksCardTextMobile">Marks Calculator</h2>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalculatorHome;
