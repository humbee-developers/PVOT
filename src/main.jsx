import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./fonts/Fontspring-DEMO-freigeist-conregular.otf";
import "./fonts/Fontspring-DEMO-freigeist-conbolditalic.otf";
import "./fonts/Fontspring-DEMO-freigeist-bolditalic.otf";
import "./fonts/Fontspring-DEMO-freigeist-black.otf";
import "./fonts/Fontspring-DEMO-freigeist-conmedium.otf";
import "./fonts/Fontspring-DEMO-freigeist-conmediumitalic.otf";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
