// client/src/main.tsx
import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/base.css";

// Clear any existing styles that might be causing issues
const root = document.getElementById("root");
if (root) {
  root.style.backgroundColor = 'transparent';
}

createRoot(document.getElementById("root")!).render(
  <div style={{ backgroundColor: 'transparent' }}>
    <App />
  </div>
);