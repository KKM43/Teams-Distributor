import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./index.css";

export const CoinFlip = () => {
   const navigate = useNavigate();
    const [result, setResult] = useState('');   

    const flipCoin = () => {
        const randomNumber = Math.random();
        if (randomNumber > 0.5) {
           setResult('Tails');
        } else {
           setResult('Heads');
        }
       };
       
      const goBack = () => {
         navigate("/")
           }
 

 return (
    <div className='container'>
    <h1>Coin Flip Game</h1>
    <button onClick={flipCoin}>Flip coin</button>
    <button onClick={goBack}>Back</button>
    <br></br>
    <br></br>
    <br></br>

    <h2>{result}</h2>
 </div>
 );
};