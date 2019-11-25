import React from 'react'
import LibraryFloorNavBar from "../components/LibraryFloorNavBar";
import { Circle } from 'rc-progress';
import SeatMap from "../components/SeatMap";
import ChairGeekService from "../services/ChairGeekService";
import {BrowserRouter as Router, Route} from 'react-router-dom'
import LibraryTableHeatmap from "../components/LibraryTableHeatmap";

const chairGeekService = ChairGeekService.getInstance();

const colorScale = ['#eb291e','#de732c','#e8ad4d', '#e8e04d', '#43a047'];

export default class LibraryFloor extends React.Component {
    constructor(props) {
        super(props)
        const defaultTables = [];
        const floorState = {"floorId": -1, "tableCapacity": 0, "numPeople": 0}
        this.state = {
            floorState: floorState,
            tables: defaultTables,
            initialLoad: true,
            heatMapToggle: false,
            floorId: this.props.match.params.id
        }

        chairGeekService.findAllTables(this.state.floorId, this.setTablesState)
        chairGeekService.findFloorDetail(this.state.floorId, this.setFloorState)
    }

    // componentDidMount() {
    //     this.timer = setInterval(
    //         () => this.updatePage(),
    //         10000
    //     )
    //     console.log("didMount")
    //     this.updatePage()
    // }
    //
    // componentWillUnmount() {
    //     clearInterval(this.timer)
    // }

    updatePage() {
        chairGeekService.findAllTables(this.state.floorId, this.setTablesState)
        chairGeekService.findFloorDetail(this.state.floorId, this.setFloorState)
    }

    setTablesState = tables => {
        this.setState(prevState => ({
        ...prevState,
        tables: tables.tables,
    }))
    }

    setFloorState = floor => {
        console.log(floor)
        this.setState(prevState => ({
            ...prevState,
            floorState: floor
        }))
    }

    render() {
        return(
            <div>
        <LibraryFloorNavBar/>
        <br/>
        <h3 className="mr-3">Floor {this.state.floorId}</h3>

                {this.state.floorId == 3 && <div className="libraryInfo mt-5">
                    <div className="circleSizeLibrary">
                        <Circle percent={this.state.floorState.numPeople/this.state.floorState.tableCapacity *100} strokeWidth="10" trailWidth="10" trailColor="#43A047"
                                strokeColor="#eb291e"/>
                        <h2 className="pl-3 center-block">{this.state.floorState.numPeople/this.state.floorState.tableCapacity * 100}%</h2>
                    </div>
                    <div className="infoText mt-4">
                        <div className="infoTextinner">
                            <div className="spaceText"> Available spaces: {this.state.floorState.tableCapacity - this.state.floorState.numPeople}</div>
                            <div className="spaceText"> Capacity: {this.state.floorState.tableCapacity}</div>
                        </div>
                    </div>
                </div>}
                {this.state.floorId == 3 && <b className="float-left ml-5">Not Available</b>}
                {this.state.floorId == 3 && <b className="float-right mr-5">Available</b>}


                {this.state.floorId == 3 && <SeatMap tables={this.state.tables} colorScale={colorScale}></SeatMap>}

            </div>
        )
    }

}