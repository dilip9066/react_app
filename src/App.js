import "./App.css";
import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import About from "./Components/About";


function App() {
     
  const [btnData,setbtnData]= useState({

          btnName:"Enable Dark Mode",

          tColour:'black'
  })

      const [mode,setMode]=useState('light')

   const toggleMode=()=>{
     if (mode==='light') {
      setMode('dark')
      setbtnData({

        btnName:"Disable Dark Mode",

        tColour:'white'



})

     } else {
      setMode('light')
      setbtnData({

        btnName:"Enable Dark Mode",

        tColour:'black'
})

     }


   }
  return (
    <>
      <Navbar Navtitle="First App" Link1="About Us" mode={mode} toggleMode= {toggleMode} btnData={btnData} />

    
      
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
