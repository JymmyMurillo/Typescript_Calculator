import React from "react";
import Calculator from "./components/Calculator.tsx";
import "./App.css";

// Main App component
const App: React.FC = () => {
  return (
    <div className="App">
      {/* Render the Calculator component */}
      <Calculator />
    </div>
  );
};

export default App;
