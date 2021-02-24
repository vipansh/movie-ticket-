import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { MovieNameContaxt } from '../Contaxt/MovieNameContaxt'
import { SelectedArrayContext } from '../Contaxt/SelectedContaxt'
import { BiCameraMovie } from 'react-icons/bi';
const BookTicket = (props) => {

    const { movieName, setmovieName } = useContext(MovieNameContaxt)
    const { selectedArray, setSelectedArray } = useContext(SelectedArrayContext)



    return (
        <div className="book-ticket-link">
            <Link to={`/bookingPage/${movieName}`}>Book Ticket for {movieName} <BiCameraMovie className="book-ticket-icon" /> </Link>
        </div>
    )
}

export default BookTicket
