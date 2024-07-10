import React from "react";
import Weather from "./Weather";
import './App.css';

export default function App() {
  return (
    <div className="App">
      <div className="container">
      <Weather defaultCity="Greece" />
      <footer>
        This project was coded by <a href="https://portfolio-velvety-5418a3.netlify.app" target="_blank" rel="noreferrer">Nolwazi Ngcongo</a> and is open-sourced on {" "} <a href="https://github.com/NolwaziNgcongo/react-weather-app" target="_blank" rel="noreferrer">GitHub</a>{" "}and <a href="https://incandescent-empanada-3f5eb3.netlify.app" target="_blank" rel="noopener noreferrer">hosted on Netlify</a>
      </footer>
      </div>
    </div>
  );
}


