import RTChart from 'react-rt-chart';
import React, {Component} from 'react';
import "./ChartComponent.css"




export default class MyChart extends Component{
    constructor(props){
        super(props);
        // state : Object { "data"} 
        this.state = {
            data: {
                date: new Date(),
                Car: Math.floor(Math.random() * 6) + 1,
                Bus: Math.floor(Math.random() * 6) + 1   
            }
        };
    }

    newDataUpdate(){

        this.setState({
            data: {
                date: new Date(),
                Car: Math.floor(Math.random() * 6) + 1,
                Bus: Math.floor(Math.random() * 6) + 1
            }
        });
         
    }
    
    
    componentDidMount() {
        setInterval(() => this.newDataUpdate(), 2000);
    }


    render() {
        var flow = {
                duration: 1
        };
    
        return <RTChart
                flow={flow}
                fields={['Car','Bus']}
                data={this.state.data} 
                maxValues={6}/>
        }

}