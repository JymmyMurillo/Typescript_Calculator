import React, { useState } from "react";
import Display from "./Display.tsx";
import Button from "./Button.tsx";
import * as math from "mathjs";

// Main Calculator component containing the logic
const Calculator: React.FC = () => {
  // Array of buttons to render in the calculator
  const buttons = [
    "C",
    "←",
    "%",
    "/",
    "7",
    "8",
    "9",
    "*",
    "4",
    "5",
    "6",
    "-",
    "1",
    "2",
    "3",
    "+",
    "00",
    "0",
    ".",
    "=",
  ];
// State to store the current operation
  const [operation, setOperation] = useState("");
  // State to store the result of the operation
  const [result, setResult] = useState("");

  // Function to handle button clicks
  const handleButtonClick = (value: string) => {
    if (value === "=") {
      // If the "=" button is clicked, evaluate the operation
      try {
        const expression = operation.replace(/(\d+(\.\d+)?)%/g, "($1/100)"); // Replace % with /100 for math.js evaluation
        const result = math.evaluate(expression); // Use math.js to evaluate the operation
        setResult(result.toString()); // Set the result
        setOperation(result.toString()); // Clear the operation
      } catch (error) {
        setResult("Error"); // Display an error if the operation is invalid
      }
    } else if (value === "C") {
      // If the "C" button is clicked, clear the operation and result
      setOperation("");
      setResult("");
    } else if (value === "←") {
      // If the "←" button is clicked, remove the last character from the operation
      const newOperation = operation.slice(0, -1); // Create a new operation without the last character
      setOperation(newOperation);
      // Check if the last character is a number
      if (/[\d.]$/.test(newOperation)) {
        try {
          const expression = newOperation.replace(
            /(\d+(\.\d+)?)%/g,
            "($1/100)"
          ); // Replace % with /100 for math.js evaluation
          const result = math.evaluate(expression); // Use math.js to evaluate the operation
          setResult(result.toString()); // Set the result
          console.log(result);
        } catch (error) {
          setResult("Error"); // Display an error if the operation is invalid
        }
      } else {
        setResult("Error"); // Display an error if the operation is invalid
      }
    } else {
      // Append the value to the operation
      const newOperation = operation + value; // Create a new operation with the new value
      setOperation(newOperation); // Update the operation state
      // Check if the last character is a number
      if (/[\d.]$/.test(newOperation)) {
        try {
          const expression = newOperation.replace(/(\d+(\.\d+)?)%/g, "($1/100)"); // Replace % with /100 for math.js evaluation
          const result = math.evaluate(expression); // Use math.js to evaluate the operation
          setResult(result.toString()); // Set the result
        
        } catch (error) {
          setResult("Error"); // Display an error if the operation is invalid
        }
      }
    }
  };

  return (
    <div className="calculator">
      {/* Display the operation and result */}
      <Display operation={operation} result={result} />
      <div className="buttons">
        {/* Render buttons for numbers and operations */}
        {buttons.map((label) => (
          <Button
            key={label}
            label={label}
            onClick={() => handleButtonClick(label)}
          />
        ))}
      </div>
    </div>
  );
};

export default Calculator;
