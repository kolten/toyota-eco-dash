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
            return data.json();
        }).then( (response) => {
            response.forEach( (response2) => {
                console.log("hi");
                console.log(this.state.data.Score,this.state.data.Adverage)
               this.setState({
                data:{
                    date: new Date(),
                    Score: parseFloat(response2.myScore),
                    Adverage: parseFloat(response2.theirScore)
                }
            })
            })
         
        })
    }

    newDataUpdate(){
        
        this.getData()
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