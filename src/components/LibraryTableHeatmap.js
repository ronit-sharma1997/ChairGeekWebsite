import React from 'react';
import * as d3 from 'd3';

export default class HeatMap extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            heatmap: []
        }
        this.myRef = React.createRef()

    }

    componentDidMount() {
        let hm;
        let margin = { top: 30, right: 30, bottom: 50, left: 30 },
            width = 450 - margin.left - margin.right,
            height = 450 - margin.top - margin.bottom;
        // append the svg object to the div of the component
        let svg = d3.select(this.refs.heatmap)
            .append("svg")
            .attr("width", width + margin.left + margin.right)
            .attr("height", height + margin.top + margin.bottom)
            .append("g")
            .attr("transform",
                "translate(" + margin.left + "," + margin.top + ")");
        // create labels
        let yLabels = new Array(32).fill(0).map((_, i) => `${i}`).reverse()
        let xLabels = new Array(32).fill(0).map((_, i) => `${i}`)

        // build scales
        // Build X scales and axis:
        var x = d3.scaleBand()
            .range([0, width])
            .domain(xLabels)
            .padding(0.01);
        svg.append("g")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x))

        // Build X scales and axis:
        var y = d3.scaleBand()
            .range([height, 0])
            .domain(yLabels)
            .padding(0.01);
        svg.append("g")
            .call(d3.axisLeft(y));
        console.log(y)
        // Build color scale
        let vals = this.props.table.heatmap.split(",").map((val, _) => {
            return Math.floor(parseFloat(val) * 100)
        })
        console.log(vals)
        var myColor = d3.scaleLinear()
            .range(["white", "#69b3a2"])
            .domain([1, 100]);

        // Read data
        hm = this.props.table.heatmap.split(",").map((val, i) => {
            return {
                "x": i % 32,
                "y": Math.floor(i / 32),
                "val": parseFloat(val)
            }
        });
        console.log(hm)

        // Create svg
        svg.selectAll()
            .data(hm)
            .enter()
            .append("rect")
            .attr("x", function(d) {return x(d.x.toString())})
            .attr("y", function(d) {return y(d.y.toString())})
            .attr("width", x.bandwidth())
            .attr("height", y.bandwidth())
            .style("fill", function(d) {return myColor(Math.floor(d.val * 100))})

    }

    render() {

        return(
            <div className="heatmap-background">
                <div className="table-container">
                    <button className="btn-sm icon-button float-left"><i
                        className="fa fa-times fa-2x" onClick={() => this.props.toggleView()}></i></button>
                    <h1>Table {this.props.table.tableId}</h1>
                </div>
                    <div className="pl-2" ref="heatmap"/>
            </div>
        )
    }
}