import React, {Component} from 'react';
import './App.css';
import Chart from '../Component/ChartComponent'
import image from '../res/aaron-burden-38414.jpg'



class App extends Component {


 reset = () => {
   fetch('http://54.200.73.111:8080/reset')
   .then((res)=>console.log("fuuu"))

 }


  render() {
    return(
      <div>
        <div className="backgroundIMG"></div>
        <button 
        text =" reset"
        onClick = {this.reset}
        > button </button>
        <div className="score-flex">
          <div className="score-container">
            <h1>SCORE 1</h1>
          </div>
          <div className="score-container">
            <h1>SCORE 2</h1>
          </div>
        </div>
        <div className="myChart">
          <Chart></Chart>
        </div>
        <div className="flexContainer">
          <div className="item-container">
            <h5>SPEED</h5>
            <h1>DATA</h1>
            <h5 className="unit">MPH</h5>
            
          </div>
          <div className="item-container">
            <h5>ENGINE</h5>
            <h1>DATA</h1>
            <h5 className="unit">RPM</h5>
          </div>
          <div className="item-container">
            <h5>EFFICIENCY</h5>
            <h1>DATA</h1>
            <h5 className="unit">MPH</h5>
          </div>
        </div>
      </div>
    )
  };
}





export default App;