import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./font/Gilroy-Regular.ttf";
import "./font/Gilroy-Bold.ttf";
import "./font/Gilroy-BlackItalic.ttf";
import "./font/Gilroy-Black.ttf";
// import "./font/Fontspring-DEMO-freigeist-conmedium.otf";
import "./font/Gilroy-MediumItalic.ttf";
import "./font/Gilroy-Medium.ttf";
import "./font/Gilroy-Light.ttf";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
