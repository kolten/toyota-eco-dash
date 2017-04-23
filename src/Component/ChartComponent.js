import RTChart from 'react-rt-chart';
import React, {Component} from 'react';
import "./ChartComponent.css"




export default class MyChart extends Component{
    constructor(props){
        super(props);
        console.log("printing props");
        console.log(props); 
        this.state = this.props;
    }
    componentWillReceiveProps(nextProps){
        console.log("will rec props");
        console.log(nextProps, this.state);
        if(this.state != nextProps){
            this.setState({nextProps})
        }
    }



    render() {
        var flow = {
                duration: 0
        };
    
        return <RTChart
            flow={flow}
            fields={['Score','Adverage']}
            data={this.state} 
            maxValues={6}/>
        }

}