import React from "react";
import {
  Blog,
  Features,
  Footer,
  WhatGPT3,
  Possibility,
  Header,
} from "./containers";
import { Cta, Brand, Navbar } from "./components";
import "./app.css";

const App = () => {
  return (
    <div className="App">
      <div className="gradient_bg">
        <Navbar />
        <Header />
      </div>
      <Brand />
      <WhatGPT3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
};

export default App;
