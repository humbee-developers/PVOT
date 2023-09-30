import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./font/Freigeist-Regular.ttf";
import "./font/Freigeist-Bold.ttf";
import "./font/Freigeist-BlackItalic.ttf";
import "./font/Freigeist-Black.ttf";
// import "./font/Fontspring-DEMO-freigeist-conmedium.otf";
import "./font/Freigeist-MediumItalic.ttf";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
