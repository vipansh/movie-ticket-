import React from 'react'
import { SelectedArrayContext } from '../Contaxt/SelectedContaxt'

const TotalSeat = () => {

    const { selectedArray, setSelectedArray } = React.useContext(SelectedArrayContext)



    if (selectedArray.length > 0) {

        return (
            <div className="text-total">
                You have selected <span id="count">{selectedArray.length}</span> seats for a total price of
                <span id="total">₹{selectedArray.length * 100}</span>
            </div>
        )
    }
    else {
        return (
            <div className="text-total"> Select a seat</div>
        )
    }
}

export default TotalSeat
