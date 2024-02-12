import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import "./style.css";
import Footer from "./components/Footer";

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);
root.render(
  <BrowserRouter>
    <div className="App">
      <App />
      <Footer />
    </div>
    <div className="desktop-message">
      <h1 className="text-white text-3xl">
        App in maintenance for this screen size
      </h1>
    </div>
  </BrowserRouter>
);
