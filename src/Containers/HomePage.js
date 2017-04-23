import React, {Component} from 'react'
import './HomePage.css';

class App extends Component {
	constructor(props){
		super(props);
		this.state={
			data:{
				score:1
			}
		}
		
		  fetch('http://54.200.73.111:8080/data')
    .then( (data) => {
      return data.json();
    })
      .then( (response) => {
        response.forEach( (response2) => {
          console.log(response2);
        this.setState({
          data:{
            score: parseFloat(response2.myScore).toFixed(2),
	          avgScore: parseFloat(response2.otherScore).toFixed(2),
          }
        })
      })
     }).catch((err) => {
      console.log(err);
     })
     .catch((err) =>{
      console.log(err);
     })



	 	}






  render() {
    return(
<div id="container" >
  <div id="top">
    <div className="left" id="music">
      <div className="label">My Score</div>
      <div className="content"><span className="num">{this.state.data.score}</span>
      </div>
    </div>
    <div className="right" id="speed">
      <div className="label">Other Score</div>
      <div className="content"><span className="num">this.props.data.myScore</span>
      </div>
    </div>
  </div>
  <div id="bottom">
    <div className="left" id="temp">
      <div className="icon ion-thermometer"></div>
      <div className="label">Temperature</div>
      <div className="content"><span className="num">68</span>
        <div className="type">Fahrenheit</div>
      </div>
    </div>
    <div className="middle" id="nav">
      <div className="icon ion-map"></div>
      <div className="label">Navigation</div>
      <div className="content"><span className="num">6.2</span>
        <div className="type">Miles to Destination</div>
      </div>
    </div>
    <div className="right" id="fuel">
      <div className="icon maki-fuel"></div>
      <div className="label">Fuel Remaining</div>
      <div className="content"><span className="num">345</span>
        <div className="type">Miles to Empty</div>
      </div>
    </div>
  </div>
</div>
    )
  };
}


export default App;