import React from 'react'
import { BookingPosition } from './BookingPosition'

export const BookingRow = ({ id }) => {

    return (
        <div className="row" id="A">

            {[...Array(8)].map((_, index) => <BookingPosition row={id} position={index} key={index} />)}


        </div>
    )
}
