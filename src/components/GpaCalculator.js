import React from "react";
import { Header } from "./Header";
import { useState } from "react";
import GpaCalculatorInput from "./GpaCalculatorInput";

import { IoMdAddCircle } from "react-icons/io";
import { AiFillMinusCircle } from "react-icons/ai";

import { setGpa } from "../actions/gpa";
import { useDispatch } from "react-redux";
import { MatPaperButton } from "./MatPaperButton";

const GpaCalculator = () => {

  const [subjects, setSubjects] = useState([
    {
      grade: "",
      credits: null,
      subjectCount: 0,
    },
    {
      grade: "",
      credits: null,
      subjectCount: 1,
    },
    {
      grade: "",
      credits: null,
      subjectCount: 2,
    },
  ]);

  const addSubject = () => {
    if (subjects.length == 10) {
      alert("MAX 10 Subjects Allowed");
    } else {
      let temp = [
        ...subjects,
        {
          grade: "",
          credits: null,
          subjectCount: subjects.length,
        },
      ];
      setSubjects(temp);
    }
  };

  const removeSubject = (subjectToBeRemoved) => {
    if (subjects.length == 1) {
      alert("Minimum 1 subject is required!");
    } else {
      let temp = subjects.filter((subject) => subject != subjectToBeRemoved);
      let final = temp.map((subject, index) => {
        if (subject.subjectCount != index ) {
          temp[index].subjectCount = index ;
        }
        return subject;
      });

      setSubjects(final);
    }
  };

  const convertGradeToValue = (grade) => {
    switch (grade) {
      case "S":
        return 10;
      case "A":
        return 9;
      case "B":
        return 8;
      case "C":
        return 7;
      case "D":
        return 6;
      case "E":
        return 5;
      case "F":
        return 4;
      case "N":
        return 0;
    }
  };

  const dispatch = useDispatch();

  const calculateGPA = () => {
    // debugger;
    var sumGradeCredit = 0;
    var sumCredits = 0;
    var nullValues = false;
    subjects.map((subject) => {
      if (subject.credits == null || subject.grade == "") {
        nullValues = true;
      }
      sumGradeCredit += subject.credits * convertGradeToValue(subject.grade);
      sumCredits += subject.credits;
    });
    if (nullValues) alert("Please select the Grade and respective Credits!");
    else {
      let gpa = (sumGradeCredit / sumCredits).toFixed(2);
      document.getElementById("gpaResult").innerHTML = "GPA : " + gpa;
      dispatch(setGpa(gpa));
    }
  };

  return (
    <div>
      <Header></Header>
      <MatPaperButton/>
      <div className="modal-page-desktop">
        <div className="content-container">
          <h3 className="title">GPA CALCULATOR</h3>
        </div>
      </div>
      <div className="content-container">
        <div className="container">
          {subjects.map((subject) => {
            return (
              <div className="individualSubject" key={subject.subjectCount}>
                <h4 className="Course-label">Course {subject.subjectCount + 1}: </h4>
                <GpaCalculatorInput
                  orignalSubjects={subjects}
                  subject={subject}
                  setSubjects={setSubjects}
                ></GpaCalculatorInput>
                <AiFillMinusCircle
                  value={{ color: "#eb4034" }}
                  size={25}
                  className="removeSubject"
                  onClick={() => {
                    removeSubject(subject);
                  }}
                ></AiFillMinusCircle>
              </div>
            );
          })}
          <IoMdAddCircle
            value={{ color: "darkslategray" }}
            size={35}
            className="addNewSubject"
            onClick={addSubject}
          ></IoMdAddCircle>
          <button className="calculateButton" onClick={calculateGPA}>
            CALCULATE
          </button>
          <span id="gpaResult" className="gpaResult"></span>
        </div>
      </div>
    </div>
  );
}

export default GpaCalculator;