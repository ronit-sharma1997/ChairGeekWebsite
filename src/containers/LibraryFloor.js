import React from 'react'
import LibraryFloorNavBar from "../components/LibraryFloorNavBar";
import { Circle } from 'rc-progress';
import { VictoryLegend } from 'victory'

export default class LibraryFloor extends React.Component {
    constructor(props) {
        super(props)
    }
    render() {
        return(
            <div>
        <LibraryFloorNavBar/>
        <br/>
        <h3 className="mr-3">Floor 3</h3>

                <div className="libraryInfo mt-5">
                    <div className="circleSizeLibrary">
                        <Circle percent="50" strokeWidth="10" trailWidth="10" strokeColor="#43A047 "/>
                        <h2 className="pl-3">100%</h2>
                    </div>
                    <div className="infoText mt-4">
                        <div className="infoTextinner">
                            <div className="spaceText"> Available spaces: 0</div>
                            <div className="spaceText"> Capacity: 0</div>
                        </div>
                    </div>
                </div>

            </div>
        )
    }

}