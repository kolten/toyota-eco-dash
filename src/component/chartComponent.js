var Chart = require("chart.js").Line;
var lineChartData = {
    labels: ["Data 1", "Data 2", "Data 3", "Data 4", "Data 5", "Data 6", "Data 7"],
    datasets: [{
        fillColor: "rgba(220,220,220,0)",
        strokeColor: "rgba(220,180,0,1)",
        pointColor: "rgba(220,180,0,1)",
        data: [20, 30, 80, 20, 40, 10, 60]
    }, {
        fillColor: "rgba(151,187,205,0)",
        strokeColor: "rgba(151,187,205,1)",
        pointColor: "rgba(151,187,205,1)",
        data: [60, 10, 40, 30, 80, 30, 20]
    }]

}

var MyComponent = React.createClass({
    render: function () {
        




        return 
            <canvas id="myChart" width="400" height="400"></canvas>
    }
});