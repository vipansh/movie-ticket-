import React, { useState, useEffect } from "react";

export const BookedContaxt = React.createContext();

export const BookedProvider = ({ children }) => {


    const [booked, setBooked] = useState([])

    useEffect(() => {
        let accupiedArray = JSON.parse(localStorage.getItem("user"))
        if (accupiedArray) {
            setBooked(accupiedArray)
        }
    }, [])


    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(booked))
    }, [booked])





    return (
        <BookedContaxt.Provider
            value={{ booked, setBooked }}>
            {children}
        </BookedContaxt.Provider>
    );
};