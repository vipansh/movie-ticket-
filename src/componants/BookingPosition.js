import React, { useState, useEffect, useContext } from 'react'
import { AccupiedContext } from '../Contaxt/AccupiedContaxt'
import { SelectedArrayContext } from '../Contaxt/SelectedContaxt'
import { useParams } from "react-router-dom";
import { MovieNameContaxt } from '../Contaxt/MovieNameContaxt';
export const BookingPosition = ({ match, row, position }) => {

    let { name } = useParams()
    const [seatPosition] = useState(row + ++position)
    const [seatOccupied, setSeatOccupied] = useState(false)
    const [seatSelected, setSeatSelected] = useState(false)




    const { selectedArray, setSelectedArray } = useContext(SelectedArrayContext)
    const { Accupied, setAccupied } = useContext(AccupiedContext)
    const { movieName, setmovieName } = useContext(MovieNameContaxt)



    useEffect(() => {
        if (Accupied.includes(seatPosition)) {
            setSeatOccupied(true)
        }



        let accupiedSeat = JSON.parse(localStorage.getItem("user"))
        if (accupiedSeat) {


            const thisarray = accupiedSeat.filter(data => {
                return data.name === movieName
            })

            let bookeAndAccupied = []
            if (thisarray) {
                thisarray.forEach(element => {
                    bookeAndAccupied.push(...element.seatbooked)
                });
            }
            console.log(bookeAndAccupied)
            if (bookeAndAccupied.includes(seatPosition)) {
                setSeatOccupied(true)
            }
        }

    }, [])





    const addPosition = () => {

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



    return (
        <div id={seatPosition} className={"seat " + (seatOccupied ? " occupied " : "") + (seatSelected ? " selected " : "")} onClick={addPosition}></div>
    )
}
