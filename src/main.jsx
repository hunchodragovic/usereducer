import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import CountContextProvider from "./context/CountContext"; // Fixed: Using correct provider

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <CountContextProvider>
      <App />
    </CountContextProvider>
  </StrictMode>
);
