import React, {Component} from 'react'
import './App.css';
import DriveGraph from "../Component/ReactChartComponent"

class App extends Component {





 




  constructor(props){
    super(props);
    this.state = {
      data: [
        {name: '1', uv: 4000, pv: 2400, amt: 2400},
        {name: '2', uv: 3000, pv: 1398, amt: 2210},
        {name: '7', uv: 3490, pv: 4300, amt: 2100}
    ]};
    this.i = 7;




  }

  componentDidMount(){
    var intervalId = setInterval(this.addPoint, 5000);
  }

 addPoint = () => {
      var {i} = this
      i+=1
      var {data} = this.state;
      console.log(this.state);
      
      //this.state.data.push( {name: this.i, uv: 4000, pv: 2400, amt: 2400});
      data.push( {name: i, uv: 4000, pv: 2400, amt: 2400});
      this.setState({data})
      this.i = i;
    };




  render() {
    return(
      <div>
        <h1>Testing Chart</h1>
        <DriveGraph data={this.state.data}></DriveGraph>
      </div>
    )
  };
}


export default App;