import React, { useState } from 'react'
import "./BMICalculator.css";

function BMICalculator() {
  const [height, setHeight]= useState("");
  const [weight, setWeight]= useState("");
  const [bmi, setBmi]= useState(null);
  const [category, setCategory]= useState("");

  const CalculateBMI =()=>{
      if( height && weight){
        const heightInMtr=height/100;
        const bmi =(weight/(heightInMtr**2)).toFixed(2);
        setBmi(bmi);

      
      if(bmi<18.5){
        setCategory("UnderWeight")
      }
      else if(bmi>=18.5 && bmi<=24.9){
        setCategory("Normal")
      }
      else if(bmi>=25 && bmi<=29.9){
        setCategory("OverWeight")
      }
      else if(bmi>=30 && bmi<=39.9){
        setCategory("Obese")
      }
      else if(bmi>=40){
        setCategory("Extreme Obesity")
      }
    }
  }
  const resetValues = () => {
    setHeight('');
    setWeight('');
    setBmi(null);
    setCategory('');
  };

  const getCategoryColor = () => {
    switch (category) {
      case "UnderWeight":
        return { color: "skyblue" }; 
      case "Normal":
        return { color: "lightgreen" }; 
      case "OverWeight":
        return { color: "yellow" }; 
      case "Obese":
        return { color: "red" }; 
        case "Extreme Obesity":
        return { color: "violet" };
      default:
        return { color: "black" };
    }
  };
  
  return (
    <>
        <div className='bmicard'>
          <h2>BMI Calulator</h2>
          <div className="input-group">
            <label>Weight (kg)</label>
            <input type="number" value={weight} onChange={(e)=>setWeight(e.target.value)} placeholder='Enter your Weight'/>
          </div>
          <div className="input-group">
            <label>Height (cm)</label>
            <input type="number" value={height} onChange={(e)=>setHeight(e.target.value)} placeholder='Enter your Height'/>
          </div>
          <button className='btn-calculator' onClick={CalculateBMI}>Calculate</button>
          <button className="btn-reset" onClick={resetValues}>Reset</button>
        {
          bmi && (
            <div className="result">
              <h3>Your BMI : {bmi}</h3>
              <h4 style={getCategoryColor()}>Category: {category}</h4>
            </div>
          )
        }
        </div>
        
      </>
  )
}

export default BMICalculator