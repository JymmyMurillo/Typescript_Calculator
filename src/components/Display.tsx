import React from "react";

// Interface for the props expected by the Display component
interface DisplayProps {
  operation: string; // The current operation being displayed
  result: string; // The result of the operation
}

// Display component to show the operation and the result
const Display: React.FC<DisplayProps> = ({ operation, result }) => {
  return (
    <div className="display">
      {/* Display the current operation */}
      <div className="operation">{operation}</div>
      {/* Display the result of the operation */}
      <div className="result">{result}</div>
    </div>
  );
};

export default Display;
