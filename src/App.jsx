import { useEffect, useRef, useState } from "react";
import NavBar from "./components/Nav";
import Home from "./components/Hero";
import Trade from "./components/Trade";
import Invests from "./components/Invests";
import Buy from "./components/Buy";
import Footer from "./components/Footer";
import "./App.css"



function App() {
  return (
    <div className="container">
      <div className="bgImg">
        <NavBar />
        <Home />
      </div>
      <Trade />
      <Invests />
      <Buy />
      <Footer />
    </div>
  )
}

export default App;