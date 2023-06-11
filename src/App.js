import "./App.css";
import Navbar from "./components/Navbar";
import Textform from "./components/Textform";
import React, { useState } from "react";

function App() {
  const [mode, setMode] = useState('light');

  const darkMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='rgb(12, 49, 74)'
      document.body.style.color='white'
    } 
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      document.body.style.color='black'

    }
  }

  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" mode={mode} darkMode={darkMode}/>
      <div className="container my-3">
        <Textform heading="Enter the text below to analyze" />
      </div>
    </>
  );
}

export default App;
