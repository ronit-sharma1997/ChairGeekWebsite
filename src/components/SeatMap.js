import React from "react";
import LibraryTable from "../containers/LibraryTable";
import {Colorscale} from "react-colorscales";


const SeatMap = ({tables, colorScale}) => {
    console.log(tables)
        return (
            <div className="seating-area">
                <Colorscale
                        colorscale={colorScale}
                        width={50}
                    />

                {tables && tables.map(function (table, index) {
                    return(
                    <LibraryTable table={table}/>
                    )
                })}

            </div>
        )
}
export default SeatMap
