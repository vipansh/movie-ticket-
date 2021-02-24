import React, { useState, useEffect } from "react";

export const MovieNameContaxt = React.createContext();

export const MovieNameProvider = ({ children }) => {


    const [movieName, setmovieName] = useState("")





    return (
        <MovieNameContaxt.Provider
            value={{ movieName, setmovieName }}>
            {children}
        </MovieNameContaxt.Provider>
    );
};