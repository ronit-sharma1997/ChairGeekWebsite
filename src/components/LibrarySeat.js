import React from 'react'
import ReactTooltip from 'react-tooltip'

const LibrarySeat = ({seatAvailable, tableId, seatId}) => {
    let typeOfSeat
    let tooltip
    let message
    let messageType
    if(seatAvailable) {
        typeOfSeat = "empty-seat"
        message = "Available"
        messageType = "success"
    } else {
        typeOfSeat = "taken-seat"
        message = "Unavailable"
        messageType = "error"
    }
    console.log(message)
    console.log(messageType)
    return(
        <div className={typeOfSeat}><p data-tip data-for={(tableId.toString() + seatId.toString())}>{seatId}</p>
            <ReactTooltip id={(tableId.toString() + seatId.toString())} type={messageType}>
                <span>{message}</span>
            </ReactTooltip>
        </div>
    )
}
export default LibrarySeat