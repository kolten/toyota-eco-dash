import React, {Component} from 'react'
import './HomePage.css';
import '../animate.css'

class App extends Component {
	constructor(props){
		super(props);
		this.state={
			data:{
				score:1,
        avgScore:1,
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
	          avgScore: parseFloat(response2.theirScore).toFixed(2),
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
        <img className="emoji" src="http://orig07.deviantart.net/9167/f/2016/299/2/c/emojis_de_facebook_nuevos_en_png_49_by_imagenes_en_png-damc73k.png"/>
      </div>

      <div className="cardScore">
        <h1>OTHER'S SCORE</h1>
        <div className="divider"/>
        <h3>{this.state.data.avgScore}</h3>
        <img className="emoji" src="https://s-media-cache-ak0.pinimg.com/originals/27/b6/73/27b6732ed47a6385bb95fcf223634fef.png"/>
      </div>




      <div className="cardScore animated bounceInRight">
        <h1>ADV. SPEED</h1>
        <div className="divider"/>

        <h3>36 MPH</h3>
        <img className="emoji" src="https://cdn.shopify.com/s/files/1/0185/5092/products/places-0066.png?v=1369543784"/>
      </div>
      <div className="cardScore animated bounceInRight">
        <h1>FUEL USED</h1>
        <div className="divider"/>
        <h3>0.2 GALLONS</h3>
        <img className="emoji" src="http://orig04.deviantart.net/037f/f/2016/299/a/d/emojis_de_facebook_nuevos_en_png_24_by_imagenes_en_png-dambzfj.png"/>
      </div>
      <div className="cardScore animated bounceInDown">
        <h1>ADV. B.P.</h1>
        <div className="divider"/>
        <h3>0.01 Pa</h3>
        <img className="emoji" src="http://orig04.deviantart.net/2f32/f/2016/298/d/5/emojis_de_facebook_nuevos_en_png_12_by_imagenes_en_png-dam9s2y.png"/>
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