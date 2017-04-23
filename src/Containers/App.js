import React, {Component} from 'react'
import './App.css';
import DriveGraph from "../Component/ReactChartComponent"

class App extends Component {

  render() {
    return(
      <div>
        <h1>Testing Chart</h1>
        <DriveGraph></DriveGraph>
      </div>
    )
  };
}


export default App;