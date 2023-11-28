import React from "react";
import ReactDOM from "react-dom/client";

const App = () => {
  return (
    <div>
      <p>Hello World!!</p>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
