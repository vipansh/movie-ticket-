import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { BookedContaxt } from '../Contaxt/BookedContext'
import "../styles/Myticket.css"
export const MyBookedTickets = () => {

    const { booked, setBooked } = useContext(BookedContaxt)

    console.log(booked)

    return (
        <div class="cardWrap">
            <div className="my-book-ticket-link"><Link to="/" >Back to home</Link></div>

            {booked.map((data, i) => {
                return <div key={i} className="ticket-card">

                    <h1> {data.name} </h1>
                    <div class="bp-card_content">
                        <p class="secondary">Premium ticket</p>



                        <ul>
                            <span>Seat No:</span>
                            <li className="seat-no">
                                {data.seatbooked}
                            </li>

                        </ul>

                        <span class="price">
                            Amount :     ₹{100 * data.seatbooked.length}
                        </span>


                    </div>

                </div>

            })}
        </div>
    )
}
