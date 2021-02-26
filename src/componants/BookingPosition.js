import React, { useState, useEffect, useContext } from 'react'
import { OccupiedContext } from '../Context/OccupiedContext'
import { SelectedArrayContext } from '../Context/SelectedContext'
import { useParams } from "react-router-dom";
import { MovieNameContext } from '../Context/MovieNameContext';
export const BookingPosition = ({ match, row, position }) => {

    let { name } = useParams()
    const [seatPosition] = useState(row + ++position)
    const [seatOccupied, setSeatOccupied] = useState(false)
    const [seatSelected, setSeatSelected] = useState(false)




    const { selectedArray, setSelectedArray } = useContext(SelectedArrayContext)
    const { Occupied, setOccupied } = useContext(OccupiedContext)
    const { movieName, setmovieName } = useContext(MovieNameContext)



    useEffect(() => {
        if (Occupied.includes(seatPosition)) {
            setSeatOccupied(true)
        }



        let OccupiedSeat = JSON.parse(localStorage.getItem("user"))
        if (OccupiedSeat) {


            const thisarray = OccupiedSeat.filter(data => {
                return data.name === movieName
            })

            let bookeAndOccupied = []
            if (thisarray) {
                thisarray.forEach(element => {
                    bookeAndOccupied.push(...element.seatbooked)
                });
            }
            if (bookeAndOccupied.includes(seatPosition)) {
                setSeatOccupied(true)
            }
        }

    }, [])





    const addPosition = () => {

        if (seatOccupied) {
            console.log("seat occupid")
        }

        else {
            if (selectedArray.includes(seatPosition)) {

                let newarray = selectedArray.filter(data => data !== seatPosition)
                setSelectedArray(newarray)
                setSeatSelected(false)
            }

            else {
                setSelectedArray((selectedArray => {
                    return [...selectedArray, seatPosition]
                }))
                setSeatSelected(true)

            }

        }
    }



    return (
        <div id={seatPosition} className={"seat " + (seatOccupied ? " occupied " : "") + (seatSelected ? " selected " : "")} onClick={addPosition}></div>
    )
}
