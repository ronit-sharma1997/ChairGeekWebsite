import React from 'react'
import ReactTooltip from 'react-tooltip'
import LibrarySeat from "./LibrarySeat";

const LibraryTable = ({table}) => {
    const numberOfPeople = table.numPeople
    let peopleAvailable
    if(numberOfPeople === 0) {
        peopleAvailable = "tableEmpty"
    } else if (numberOfPeople === 1) {
        peopleAvailable = "tableOneAvailable"
    } else if (numberOfPeople === 2) {
        peopleAvailable = "tableTwoAvailable"
    } else if (numberOfPeople === 3) {
        peopleAvailable = "tableThreeAvailable"
    } else {
        peopleAvailable = "tableFourAvailable"
    }
    return (
    <div className="four-seats">
        <LibrarySeat seatAvailable={true} seatId={1}/>
        <LibrarySeat seatAvailable={false} seatId={2}/>
        <div className="table-container">
            <div
                className={peopleAvailable}>
                <h2>Table {table.tableId}</h2>
                <h5 className="d-none d-md-block">{table.capacity - table.numPeople}/{table.capacity} Available</h5>
            </div>
        </div>
        <LibrarySeat seatAvailable={false} seatId={3}/>
        <LibrarySeat seatAvailable={true} seatId={4}/>
    </div>)
}
export default LibraryTable