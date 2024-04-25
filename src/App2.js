// calculator program

import React, {useState} from 'react';
// import {BrowserRouter, Routes, Route} from "react-router-dom"
import './App.css';


const Calculator = (props) => {
   
    const [number, setNumber] = useState(0);
    const [number2, setNumber2] = useState(0);
    const [operator, setOperator] = useState("");
  
        
    let result = 0;        
    if (operator === '+'){
        result = Number(number) + Number(number2)
        
    } else if (operator === '-'){
        result = Number(number) - Number(number2)
        
    } else if (operator === '*'){
        result = Number(number) * Number(number2)
       
    } else if (operator === '/'){
        result = Number(number) / Number(number2)
        
    }
   
  return (
    <div className="App">
      <header className="App-header">
    
        <h1>Calculating two numbers</h1>
        <div className="Input-numbers">
            <input type="number" value={number} onChange={e => setNumber(e.target.value)}/>
            {/* <input type="text" value={operator} onChange={e => setOperator(+e.target.value)}/> */}
            <input type="text" value={operator} onChange={e => setOperator(e.target.value)}/>
            <input type="number" value={number2} onChange={e => setNumber2(e.target.value)}/>
        </div>
        {/* <button onClick={calculate({operator})}>Calculate</button> */}
        <h2>Rendered</h2>
        <h3>{number} {operator} {number2}={result}</h3>

       
       
      </header>
    </div>
  );

};
export default Calculator;

// 웹은 dock에 놓았다!