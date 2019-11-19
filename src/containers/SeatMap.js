import React from "react";
import LibraryTable from "../components/LibraryTable";
import {Colorscale} from "react-colorscales";
import LibraryTableHeatmap from "../components/LibraryTableHeatmap";


const SeatMap = ({tables, colorScale, toggleView, toggleFunction}) => {
        return (
            <div className={toggleView? "" : "seating-area"}>
                {!toggleView && <Colorscale
                        colorscale={colorScale}
                        width={50}
                    />}

                <div className="custom-control custom-switch ml-1 d-none d-md-block">
                    <input type="checkbox" className="custom-control-input" id="togglePreview"
                    onChange={() => toggleFunction()}/>
                    <label className="custom-control-label" htmlFor="togglePreview">Heatmap Samples</label>
                </div>

                {!toggleView && tables && tables.map(function (table, index) {
                    return(
                    <LibraryTable table={table}/>
                    )
                })}

                {
                    toggleView && tables && <div className="row justify-content-center">
                        {
                        tables.map(function(table, index) {
                        return(
                        <LibraryTableHeatmap table={table}/>
                        )
                    })
                        }

                    </div>
                }
            </div>
        )
}
export default SeatMap
