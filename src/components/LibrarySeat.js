import React from 'react'
import ReactTooltip from 'react-tooltip'

const LibrarySeat = ({seatAvailable, seatId}) => {
    let typeOfSeat
    let tooltip
    let message
    let messageType
    if(seatAvailable) {
        typeOfSeat = "empty-seat"
        tooltip = "seat" + new Date().getTime().toString()
        message = "Available"
        messageType = "success"
    } else {
        typeOfSeat = "taken-seat"
        tooltip = "seat" + new Date().getTime().toString()
        message = "Unavailable"
        messageType = "error"
    }

    return(
        <div className={typeOfSeat}><p data-tip data-for={tooltip}>{seatId}</p>
            <ReactTooltip id={tooltip} type={messageType}>
                <span>{message}</span>
            </ReactTooltip>
        </div>
    )
}
export default LibrarySeat