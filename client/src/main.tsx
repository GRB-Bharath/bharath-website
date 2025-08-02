import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Global error handlers for unhandled promises
window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
  // Prevent the default behavior (which would log to console)
  event.preventDefault();
});

window.addEventListener('error', (event) => {
  console.error('Global error:', event.error);
});

createRoot(document.getElementById("root")!).render(<App />);
