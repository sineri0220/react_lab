// main FirstPage
import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
// import Calculator from './Appbasic';

// const onClick = () => {
//   navigate('/')
// }


const FirstPage = (props) => {
  const navigate = useNavigate();

  return (
    <div className="App">
      <header className="App-header">
          </header>
        <a
          className="App-link"
          href="http://localhost:3000"
          target="_blank"
          rel="noopener noreferrer"
        >
          
        </a>   
        <button
        onClick={() => {
          navigate('/calculator');
        }}
        >Go to Calculator</button>
    </div>
  );
}

export default FirstPage;



