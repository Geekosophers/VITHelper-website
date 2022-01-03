import React, { useState } from "react";
// import "./calculatorHome.css";
import { Header } from "./Header";

import { PieChart, Pie } from "recharts";

import { Link } from "react-router-dom";

import { useSelector } from "react-redux";

const data = [
  { name: "", students: 10, fill: "red" },
  { name: "GPA", students: 90, fill: "#a1a1a1" },
];

export default function CalculatorHome() {
  const calculatedGpa=useSelector(state=>state.gpa);
  console.log(calculatedGpa);

  const [gpa, setGpa] = useState(null);
  return (
    <div>
      <Header></Header>
      <div className="modal-page-desktop">
        <div className="content-container">
          <h3>CALCULATORS</h3>
        </div>
      </div>
      <div className="content-container">
        <div className="topRow">
          <Link to="/gpaCalculator">
            <div className="gpaCard">
              <PieChart width={300} height={300}>
                <Pie
                  data={data}
                  dataKey="students"
                  outerRadius={95}
                  innerRadius={75}
                  fill="green"
                >
                  <label value="9.65" position="center" />
                </Pie>
              </PieChart>
            </div>
          </Link>
          <Link to="/gpaCalculator">
            <div className="cgpaCard"></div>
          </Link>
        </div>
        <div className="bottomRow">
          <div className="marksCard"></div>
        </div>
      </div>
    </div>
  );
}
