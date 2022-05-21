import React from "react";

export default function CalculatorTextInput({
  id,
  min,
  max,
  placeholder,
  onChange = () => {},
  subscript,
}) {
  // debugger;
  return (
    <>
      <input
        type={"number"}
        id={id}
        min={min}
        max={max}
        className={"cgpa-calculator-input"}
        placeholder={placeholder}
        onChange={onChange}
      />
      <h4 className="cgpa-calculator-subscript">{subscript}</h4>
    </>
  );
}
