import React, { useState, useEffect } from "react";

export const BookedContext = React.createContext();

export const BookedProvider = ({ children }) => {


    const [booked, setBooked] = useState([])

    useEffect(() => {
        let OccupiedArray = JSON.parse(localStorage.getItem("user"))
        if (OccupiedArray) {
            setBooked(OccupiedArray)
        }
    }, [])


    useEffect(() => {
        localStorage.setItem("user", JSON.stringify(booked))
    }, [booked])





    return (
        <BookedContext.Provider
            value={{ booked, setBooked }}>
            {children}
        </BookedContext.Provider>
    );
};