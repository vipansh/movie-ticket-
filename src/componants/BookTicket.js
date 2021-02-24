import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MovieNameContaxt } from '../Contaxt/MovieNameContaxt'
import { SelectedArrayContext } from '../Contaxt/SelectedContaxt'
import { BiCameraMovie } from 'react-icons/bi';
const BookTicket = (props) => {

    const { movieName, setmovieName } = useContext(MovieNameContaxt)
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
