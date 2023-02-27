import "./App.css";
import React from "react";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";


function App() {
  return (
    <>
      <Navbar Navtitle="First App" Link1="About Us" />

    
      
      <div className="container my-3">
        <TextForm heading="Enter text for Anyalize" />
      </div>

      <div className="container my-3">
        <About />
      </div>
    </>
  );
}

export default App;
