import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Ensure correct type for `document.getElementById`
const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Root element not found"); // Handle potential null case
}

const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
