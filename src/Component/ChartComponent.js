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
                Score: Math.floor(Math.random() * 6) + 1,
                Adverage: Math.floor(Math.random() * 6) + 1   
            }
        };
    }

    getData = () =>{
        fetch('http://54.200.73.111:8080/data')
        .then( (data) => {
            console.log(data);
            console.log('success',JSON.parse(data.body));
            this.setState({data:{
                date: new Date(),
                Score: data.myScore,
                Adverage:data.theirScore

            }})
        })
    }

    newDataUpdate(){
        
        this.getData();
        // this.setState({
        //     data: {
        //         date: new Date(),
        //         Score: Math.floor(Math.random() * 6) + 1,
        //         Adverage: Math.floor(Math.random() * 6) + 1
        //     }
        // });
         
    }
    
    
    componentDidMount() {
        setInterval(() => this.newDataUpdate(), 2000);
    }


    render() {
        var flow = {
                duration: 0
        };
    
        return <RTChart
                flow={flow}
                fields={['Score','Adverage']}
                data={this.state.data} 
                maxValues={6}/>
        }

}