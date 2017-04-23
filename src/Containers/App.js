import React, {Component} from 'react';
import './App.css';
import Chart from '../Component/ChartComponent'
import image from '../res/aaron-burden-38414.jpg'



class App extends Component {
  
  
  constructor(props){
    super(props);
    this.state = {
      date: new Date(),
      Score: 0,
      Adverage: 0 
    }
  }

 reset = () => {
   fetch('http://54.200.73.111:8080/reset')
   .then((res)=>console.log("fuuu"))

 }

 renderTopNums(){
   return(
    <div className="score-flex">
      <div className="score-container">
        <h1>SCORE 1</h1>
        <h2>Data1</h2>
      </div>
      <div className="score-container">
        <h1>SCORE 2</h1>
        <h2>Data2</h2>
      </div>
    </div>

   )
 }
 renderBotNums(){
   return(
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
      
   )
 }

 newDataUpdate = () =>{
  console.log("react sux");
  fetch('http://54.200.73.111:8080/data')
    .then( (data) => {
      return data.json();
    })
      .then( (response) => {
        console.log("pre rep");
        console.log(response);
        response.forEach( (response2) => {
        console.log("hi");
        console.log(response2);
        console.log(this.state);
        this.setState({
          date: new Date(),
          Score: parseFloat(response2.myScore),
          Adverage: parseFloat(response2.theirScore)
        })
        console.log(this.state);
        // console.log(self.state.Score,self.state.Adverage)
        //   self.setState({
        //   date: new Date(),
        //   Score: parseFloat(response2.myScore),
        //   Adverage: parseFloat(response2.theirScore)
        // })
        // console.log("through"); 
      })
     }).catch((err) => {
      console.log(err);
     })
     .catch((err) =>{
      console.log(err);
     })
 }

 componentDidMount() {
  setInterval(() => this.newDataUpdate(), 6000);
 }


  render() {
    return(
      <div className="mainContainer">
        <div className="backgroundIMG"></div>
        <button 
        text =" reset"
        onClick = {this.reset}
        > button </button>
        {this.renderTopNums()}
        <div className="myChart">
          <Chart
          data = {this.state}></Chart>
        </div>
        {this.renderBotNums()}
    </div>
    )
  };
}





export default App;