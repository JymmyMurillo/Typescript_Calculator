import React from "react";

// Interface for the props expected by the Button component
interface ButtonProps {
  label: string; // The text to display on the button
  onClick: () => void; // Function to call when the button is clicked
}

// Button component to represent each button in the calculator
const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  return (
    <button onClick={onClick}>
      {/* Display the label on the button */}
      {label}
    </button>
  );
};

export default Button;
