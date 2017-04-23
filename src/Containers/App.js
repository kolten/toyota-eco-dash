import React, {Component} from 'react';
import './App.css';
import Chart from '../Component/ChartComponent'
import image from '../res/aaron-burden-38414.jpg'



class App extends Component {
  
  
  constructor(props){
    super(props);
    this.state = {
      data:{
        date: new Date(),
        Score: 0,
        Adverage: 0 
      }
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
        <h1>My Score</h1>
        <h2>{this.state.data.Score}</h2>
      </div>
      <div className="score-container">
        <h1>Other Score</h1>
        <h2>{this.state.data.Adverage}</h2>
      </div>
    </div>

   )
 }
 renderBotNums(){
   return(
    <div className="flexContainer">
      <div className="item-container">
        <h5>SPEED</h5>
        <h1>{this.state.data.speed}</h1>
        <h5 className="unit">MPH</h5>
        
      </div>
      <div className="item-container">
        <h5>ENGINE</h5>
        <h1>{this.state.data.rpm}</h1>
        <h5 className="unit">RPM</h5>
      </div>
      <div className="item-container">
        <h5>EFFICIENCY</h5>
        <h1>{this.state.data.efficiency}</h1>
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
        response.forEach( (response2) => {
          console.log(response2);
        this.setState({
          data:{
            date: new Date(),
            Score: parseFloat(response2.myScore).toFixed(2),
            Adverage: parseFloat(response2.theirScore).toFixed(2),
            speed: parseFloat(response2.speed).toFixed(2),
            rpm: parseFloat(response2.rpm).toFixed(2),
            efficiency: parseFloat(response2.fuelConsump).toFixed(2),
          }
        })
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
  setInterval(() => this.newDataUpdate(), 1000);
 }


  render() {
    return(
      <div className="secondayContainer">
        <div className="mainContainer">
          <div className="backgroundIMG"></div>
          <button 
          text =" reset"
          onClick = {this.reset}
          > button </button>

          <a href="/home">
          <button 
          text ="Park"
          > Park </button>
          </a>

          {this.renderTopNums()}
          <div className="myChart">
            <Chart

            data = {this.state.data}></Chart>
          </div>
          {this.renderBotNums()}
      </div>
    </div>
    )
  };
}





export default App;