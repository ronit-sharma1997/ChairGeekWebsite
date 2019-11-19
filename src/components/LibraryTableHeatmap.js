import React from 'react';
import Heatmap from 'react-heatmap-grid';

const LibraryTableHeatmap = ({table}) => {
    let splitted = table.heatmap.split(",");
    let x_A, y_A, data;
    console.log(splitted)
    x_A = new Array(32).fill(0).map((_, i) => `${i}`)
    y_A = new Array(32).fill(0).map((_, i) => `${i}`)
    let i = 0
    data = new Array(32).fill(0).map(() => {
        return new Array(32).fill(0).map(() => {
            return parseFloat(splitted[i++])
        })
    })
    return (
        <div className="col-12 align-items-center">
            <h1>Table {table.tableId}</h1>
            <Heatmap
                xLabels={x_A}
                yLabels={y_A}
                data={data}
                squares
                title={(value, _) => `${value}`}
            />
        </div>
    )
}
export default LibraryTableHeatmap