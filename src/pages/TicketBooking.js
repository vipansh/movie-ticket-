import React, { useContext } from 'react'
import { BookingRow } from '../componants/BookingRow';
import BookTicket from '../componants/BookTicket';
import TotalSeat from '../componants/TotalSeat';
import { MovieNameContaxt } from '../Contaxt/MovieNameContaxt';
import "../styles/TicketBooking.css"
import { Route, Redirect } from "react-router-dom";

export const TicketBooking = () => {

    const { movieName, setmovieName } = useContext(MovieNameContaxt)

    const getId = (e) => {
        let Row = e.target.id;
        let Seat = e.currentTarget.parentNode.getAttribute("id");

    }

    if (movieName) {
        return (
            <div>
                <ul className="showcase">
                    <li>
                        <div className="seat"></div>
                        <small>N/A</small>
                    </li>
                    <li>
                        <div className="seat selected"></div>
                        <small>Selected</small>
                    </li>
                    <li>
                        <div className="seat occupied"></div>
                        <small>Occupied</small>
                    </li>
                </ul>

                <div className="container">
                    <div className="screen"></div>
                    <div style={{ width: "85%", margin: "0 auto" }}>
                        <BookingRow id="A" />
                        <BookingRow id="B" />
                        <BookingRow id="C" />
                        <BookingRow id="D" />
                        <BookingRow id="E" />
                        <BookingRow id="F" />
                    </div>
                </div>
                
                <center>

                    <TotalSeat />
                    <BookTicket />
                </center>
            </div>
        )
    }

    else {
        return <Redirect to="/" />

    }


}
