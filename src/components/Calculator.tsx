import React, { useState } from "react";
import Display from "./Display.tsx";
import Button from "./Button.tsx";

// Main Calculator component containing the logic
const Calculator: React.FC = () => {
  // State to store the current operation
  const [operation, setOperation] = useState("");
  // State to store the result of the operation
  const [result, setResult] = useState("");

  // Function to handle button clicks
  const handleButtonClick = (value: string) => {
    if (value === "=") {
      // If the "=" button is clicked, evaluate the operation
      try {
        setResult(eval(operation).toString()); // Evaluate the operation and set the result
        setOperation(""); // Clear the operation
      } catch (error) {
        setResult("Error"); // Display an error if the operation is invalid
      }
    } else if (value === "C") {
      // If the "C" button is clicked, clear the operation and result
      setOperation("");
      setResult("");
    } else if (value === "←") {
      // If the "←" button is clicked, remove the last character from the operation
      setOperation(operation.slice(0, -1));
    } else if (value === "%") {
      // If the "%" button is clicked, calculate the percentage of the last number
      try {
        const lastNumber = operation.match(/\d+\.?\d*$/); // Find the last number in the operation
        if (lastNumber) {
          const percent = eval(lastNumber[0]) / 100; // Calculate the percentage
          setOperation(operation + percent.toString()); // Append the percentage to the operation
        }
      } catch (error) {
        setResult("Error"); // Display an error if the operation is invalid
      }
    } else {
      // For all other buttons, append the value to the operation
      setOperation(operation + value);
    }
  };

  return (
    <div className="calculator">
      {/* Display the operation and result */}
      <Display operation={operation} result={result} />
      <div className="buttons">
        {/* Render buttons for numbers and operations */}
        {["7", "8", "9", "/"].map((label) => (
          <Button
            key={label}
            label={label}
            onClick={() => handleButtonClick(label)}
          />
        ))}
        {["4", "5", "6", "*"].map((label) => (
          <Button
            key={label}
            label={label}
            onClick={() => handleButtonClick(label)}
          />
        ))}
        {["1", "2", "3", "-"].map((label) => (
          <Button
            key={label}
            label={label}
            onClick={() => handleButtonClick(label)}
          />
        ))}
        {["0", ".", "=", "+"].map((label) => (
          <Button
            key={label}
            label={label}
            onClick={() => handleButtonClick(label)}
          />
        ))}
        {/* Render buttons for clear, backspace, and percentage */}
        {["C", "←", "%"].map((label) => (
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
