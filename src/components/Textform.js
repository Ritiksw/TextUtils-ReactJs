import React, { useState } from "react";

export default function Textform(props) {
  const [text, setText] = useState();

  const handleOnChange = (event) => {
    console.log("onchange called");
    setText(event.target.value);
  };

  // for Uppercase button functionality
  const handleUpClick = () => {
    // console.log("button clicked " + text);
    let newText = text.toUpperCase();
    setText(newText);
  };

  // for Lowercase button functionality

  const handleLowClick = () => {
    // console.log("low clicked " + text);
    let newText1 = text.toLowerCase();
    setText(newText1);
  };

  //for clearing the textarea
  const handleClear = () => {
    // console.log("screen cleared");
    setText("");
  };

  return (
    <>
      <div className="mb-3">
        <h1>{props.heading}</h1>

        <textarea
          className="form-control"
          id="exampleFormControlTextarea1"
          rows="7"
          value={text}
          onChange={handleOnChange}
        ></textarea>
      </div>

      <div className="buttons ">
        <button className="btn btn-dark mx-2" onClick={handleClear}>
          Clear all
        </button>

        <button className=" btn btn-success mx-2" onClick={handleUpClick}>
          Convert to UpperCase
        </button>

        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
          Convert to LowerCase
        </button>
      </div>

      <div className="Summary my-3">
        <h4>Text Summary </h4>
        
        <p>
            You have entered <b> {text.split(" ").length} words,</b> <b> {text.length} characters </b> and you will take <b> {0.008*(text.split(" ").length)} minutes </b> to read the text.
        </p>

        <h4>Preview of the text entered:</h4>
       {text}
      </div>
    </>
  );
}
