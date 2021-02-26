import React, { useContext } from 'react'
import { BookingButton } from '../componants/BookingButton'
import { Mainpage } from '../componants/Mainpage'
import { BookedContext } from '../Context/BookedContext'

const Homepage = () => {

    const { booked, setBooked } = useContext(BookedContext)
    console.log(booked.length)

    return (
        <div>
            <Mainpage />
            {booked.length > 0 ? <BookingButton /> : ""}

        </div>
    )
}

export default Homepage
