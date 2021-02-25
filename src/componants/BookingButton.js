import React from 'react'
import { Link } from 'react-router-dom'

export const BookingButton = () => {
    return (
        <div className="booking-ticket-button">
            <Link to="/my-booked-tickets">See my Booking</Link>
        </div>
    )
}
