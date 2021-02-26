import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { OccupiedContext } from '../Context/OccupiedContext'
import { MovieNameContext } from '../Context/MovieNameContext'
import { SelectedArrayContext } from '../Context/SelectedContext'
import "../styles/BookingPage.css"
import { Route, Redirect } from "react-router-dom";
import { BookedContext } from '../Context/BookedContext'
export const BookingPage = () => {


    const { selectedArray, setSelectedArray } = useContext(SelectedArrayContext)
    const { Occupied, setOccupied } = useContext(OccupiedContext)
    const { movieName, setmovieName } = useContext(MovieNameContext)

    const { booked, setBooked } = useContext(BookedContext)


    const removeSelected = () => {
        setSelectedArray([])
        setmovieName([])
    }

    // name: "movie name",
    // seatbooked: ["A1", "B2"]

    const confirmTicket = () => {

        let bookingdata = [{
            name: movieName,
            seatbooked: selectedArray,
        }]


        if (booked) {

            console.log(booked)
            let newarray = [...booked, {
                name: movieName,
                seatbooked: selectedArray,
            }]
            setBooked(newarray)

        }
        else {
            setBooked(bookingdata)

        }


    }


    if (movieName) {
        return (

            <div>
                { selectedArray.map((data, index) => {

                    return (<div key={index}>
                        <div class="container-booking">

                            <div class="bp-card">
                                <div class="bp-card_label">
                                    <div class="bd-border_solid"></div>
                                    <div class="bd-border_dotted"></div>
                                </div>
                                <div class="bp-card_content">
                                    <p class="secondary">Premium ticket</p>
                                    <h4> {movieName}</h4>


                                    <ul>
                                        <span>Seat No:</span>
                                        <li className="seat-no">
                                            {data}
                                        </li>

                                    </ul>

                                    <span href="" class="price">
                                        ₹100
			</span>

                                </div>
                            </div>

                        </div>
                    </div>)
                }
                )}


                <div className="book-ticket-link home-link" onClick={removeSelected}><Link to="/">👈🏻Back to home</Link></div>\
                <div className="book-ticket-link confirm-button " onClick={confirmTicket}><Link to="/my-booked-tickets">Confirm And Book Ticket</Link></div>
            </div>
        )

    }
    else {
        return <Redirect to="/" />

    }

}
