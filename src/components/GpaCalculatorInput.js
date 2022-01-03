import React, { useState } from "react";
import Select from "react-select";
// import "./gpaCalculatorInput.css";

const gradeOptions = [
  { value: "S", label: "S" },
  { value: "A", label: "A" },
  { value: "B", label: "B" },
  { value: "C", label: "C" },
  { value: "D", label: "D" },
  { value: "E", label: "E" },
  { value: "F", label: "F" },
  { value: "N", label: "N" },
];
const creditOptions = [
  { value: 1, label: "1" },
  { value: 2, label: "2" },
  { value: 3, label: "3" },
  { value: 4, label: "4" },
  { value: 5, label: "5" },
  { value: 20, label: "20" },
];

const customStyles = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: "1px dotted pink",
    color: state.isSelected ? "red" : "blue",
    padding: 20,
  }),
  control: (provided) => ({
    ...provided,
    width: 200,
  }),
  singleValue: (provided, state) => {
    const opacity = state.isDisabled ? 0.5 : 1;
    const transition = "opacity 300ms";

    return { ...provided, opacity, transition };
  },
};
function GpaCalculatorInput({ orignalSubjects, subject, setSubjects }) {
  // debugger;
  const setSubjectGrade = (updatedSubjectGrade) => {
    // debugger;
    let tempArr = orignalSubjects.map((element, index) => {
      if (element == subject) {
        orignalSubjects[index].grade = updatedSubjectGrade.value;
      }
      return element;
    });

    setSubjects(tempArr);
  };
  const setSubjectCredits = (updatedSubjectCredit) => {
    let tempArr = orignalSubjects.map((element, index) => {
      if (element == subject) {
        orignalSubjects[index].credits = updatedSubjectCredit.value;
      }
      return element;
    });
    // debugger;
    setSubjects(tempArr);
  };

  return (
    <div>
      <div className="containerGrades">
        <Select
          className="gradeDropDown"
          styles={customStyles}
          placeholder="Grade"
          onChange={setSubjectGrade}
          options={gradeOptions}
        />
        <Select
          className="creditDropDown"
          styles={customStyles}
          placeholder="Credits"
          onChange={setSubjectCredits}
          options={creditOptions}
        />
      </div>
    </div>
  );
}

export default GpaCalculatorInput;
