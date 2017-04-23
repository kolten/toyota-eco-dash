import RTChart from 'react-rt-chart';
import React, {Component} from 'react';
import "./ChartComponent.css"




export default class MyChart extends Component{
    constructor(props){
        super(props);
        this.state ={ 
            data:{
                date: new Date(),
                Score : 0,
                Adverage: 0
            }}
        }   


    render() {
        var flow = {
            duration: 0
        };
        return <RTChart
            flow={flow}
            fields={['Score','Adverage']}
            data={this.props.data} 
            maxValues={6}/>
        }

}