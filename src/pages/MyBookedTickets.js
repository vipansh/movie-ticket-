import React, { useContext, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { BookedContext } from '../Context/BookedContext'
import "../styles/Myticket.css"
export const MyBookedTickets = () => {

    const { booked, setBooked } = useContext(BookedContext)

    const [showMsg, setShowMsg] = useState()
    useEffect(() => {
        setShowMsg(true)
        setTimeout(() => {
            setShowMsg(false)

        }, 3000);
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



                        <div>
                            <div>Seat No:</div>
                            <p className="seat-no">
                                {data.seatbooked.map(data => {
                                    return <span>{data} </span>
                                })}
                            </p>

                        </div>

                        <span class="price">
                            Amount :     ₹{100 * data.seatbooked.length}
                        </span>


                    </div>

                </div>

            })}
        </div>
    )
}
