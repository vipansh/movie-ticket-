import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MovieNameContext } from '../Context/MovieNameContext'
import { SelectedArrayContext } from '../Context/SelectedContext'
import { BiCameraMovie } from 'react-icons/bi';
const BookTicket = (props) => {

    const { movieName, setmovieName } = useContext(MovieNameContext)
    const { selectedArray, setSelectedArray } = useContext(SelectedArrayContext)

    if (selectedArray.length > 0) {

        return (
            <div className="book-ticket-link">
                <Link to={`/bookingPage/${movieName}`}>Book Ticket for {movieName} <BiCameraMovie className="book-ticket-icon" /> </Link>
            </div>
        )
    }
    else {
        return (<div className="book-ticket-link">
            Selact A Ticket <BiCameraMovie className="book-ticket-icon" />
        </div>)
    }
}

export default BookTicket
