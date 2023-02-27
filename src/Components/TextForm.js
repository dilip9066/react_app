import React, { useState } from "react";
import Cards from "./Cards";

export default function TextForm(props) {
  const [Text, SetText] = useState(" ia");
  const [word, setWord] = useState("");

  let clickHandler = () => {
    console.log("clickHandler fun called");
    let newtext = Text.toUpperCase();
    SetText(newtext);
  };
  let clickloHandler = () => {
    let lotext = Text.toLowerCase();
    SetText(lotext);
  };
  let cleartext = () => {
    SetText("");
  };
  let Wordfinder = () => {

    // const regex1 = /{word}/gi;
    let findings = Text.match(word)
     
     if (findings=== null) {
         
      document.getElementById("para").innerHTML = "No results";
      return;

     } 
     else {

      document.getElementById("para").innerHTML = findings + " - " +  findings.length + " result(s) found.";
      
     }

   
  };

  const inputChange =(event)=>{
    setWord(event.target.value);
  }

  let changeFun = (event) => {
    SetText(event.target.value);
    //  console.log("change fun fired")
  };
  return (
    <div>
      <form>
        <h1>{props.heading}</h1>
        <div className="form-group">
          <textarea className="form-control" value={Text} id="mybox" onChange={changeFun} rows="8"></textarea>
        </div>
        <div className="m-3">
          <button className="btn btn-primary   text-centre" type="button" onClick={clickHandler} > Convert to Upper case </button>
          <button className="btn btn-primary mx-2 text-centre" type="button" onClick={clickloHandler} > Convert to Lower case </button>
          <button className="btn btn-primary mx-2 text-centre" type="button" onClick={cleartext} > Clear Text </button>
          <input type="text" value={word}  onChange={inputChange} placeholder="Enter your word to find" />
          <button className="btn btn-primary mx-2 text-centre"  type="button" onClick={Wordfinder}> find word </button>
          
          


        </div>
        <div class="alert alert-success" id="para" role="alert">  </div>

      </form>
      <Cards text={Text} />
    </div>
  );
}
