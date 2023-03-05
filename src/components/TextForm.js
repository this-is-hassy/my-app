import React, { useState } from "react";

export default function TextForm(props) {
  const handleUpClick = () => {
    console.log("Uppercase was clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Convertd to Uppercase!", "success")
  };
  const handlelowerClick = () => {
    console.log("Lowercase was clicked " + text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Convertd to Lowercase!", "success")
    
  }; 
  const handleclearClick = () => {
    // console.log("Uppercase was clicked " + text);
    let newText = ("");
    setText(newText);
  };
  const handleOnChange = (event) => {
    console.log("On Change");
    setText(event.target.value);
  };
  const [text, setText] = useState(" ");
  // setText('Please enter text here');
  
  return (
    <>
      <div className="container " style={{color:props.mode === 'dark' ? 'white' : '#042743'}}>
        <h1>{props.heading}</h1>
        <div class="mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            style={{backgroundColor:props.mode === 'dark' ? '#565a60' : 'white', color:props.mode === 'dark' ? 'white' : '#042743'}}
            id="myBox"
            rows="8"
          ></textarea>
        </div>
        <button className="btn btn-secondary mx-4 my-3 "  disabled={text.length===0} onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-secondary mx-4 " disabled={text.length===0} onClick={handlelowerClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary mx-4 my-3 " disabled={text.length===0} onClick={handleclearClick}>
          Clear Text
        </button>
      </div>
      <div className="container my-4" style={{color:props.mode === 'dark' ? 'white' : '#042743'}}>
        <h2>Your text summary</h2>
        <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length} characters</p>
        <p>{0.008 * text.split(' ').filter((element)=>{return element.length!==0}).length} Minutes Read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Nothing to preview."}</p>
      </div>
      
    </>
  );
}
