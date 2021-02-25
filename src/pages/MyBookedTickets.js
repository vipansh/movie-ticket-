import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BookedContaxt } from '../Contaxt/BookedContext'
import "../styles/Myticket.css"
export const MyBookedTickets = () => {

    const { booked, setBooked } = useContext(BookedContaxt)

    const [showMsg, setShowMsg] = useState()
    useEffect(() => {
        setShowMsg(true)
        setTimeout(() => {
            setShowMsg(false)

        }, 5000);
    }, [])

    return (
        <div class="cardWrap">
            {showMsg ? <div className="msg animate slide-in-down msg-success active">Great job! Movie Booked </div> : ""}

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
