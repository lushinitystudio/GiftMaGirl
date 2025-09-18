import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

const root = document.getElementById("root");

if (root) {
  // Add cursor tracking for interactive background
  document.addEventListener('mousemove', (e) => {
    const x = (e.clientX / window.innerWidth) * 100;
    const y = (e.clientY / window.innerHeight) * 100;
    document.documentElement.style.setProperty('--mouse-x', `${x}%`);
    document.documentElement.style.setProperty('--mouse-y', `${y}%`);
  });

  createRoot(root).render(<App />);
}
