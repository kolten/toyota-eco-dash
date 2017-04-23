import React, {Component} from 'react'
import './HomePage.css';
import '../animate.css'

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
<div className="homebackground">
  <div id="container">
    <div id="dashboard"></div>
    <div className="cardContainer animated bounceInRight">
      <div className="cardScore">
        <h1>SCORE</h1>
        <div className="divider"/>
        <h3>{this.state.data.score}</h3>
        <img src="http://orig07.deviantart.net/9167/f/2016/299/2/c/emojis_de_facebook_nuevos_en_png_49_by_imagenes_en_png-damc73k.png"/>
      </div>
      <div className="cardScore animated bounceInRight">
        <h1>ADV. SPEED</h1>
        <div className="divider"/>
        <h3>36 MPH</h3>
      </div>
      <div className="cardScore animated bounceInRight">
        <h1>FUEL USED</h1>
        <div className="divider"/>
        <h3>0.2 GALLONS</h3>
      </div>
      <div className="cardScore animated bounceInDown">
        <h1>ADV. B.P.</h1>
        <div className="divider"/>
        <h3>0.01 Pa</h3>
      </div>
    </div>
  </div>
  <a div className="divider" href="./">
    <button className="fab animated bounceInDown">
      <i className="material-icons md-48">directions_car</i>
    </button>
  </a>
</div>
    )
  };
}


export default App;