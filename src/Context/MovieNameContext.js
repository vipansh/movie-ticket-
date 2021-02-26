import React, { useState, useEffect } from "react";

export const MovieNameContext = React.createContext();

export const MovieNameProvider = ({ children }) => {


    const [movieName, setmovieName] = useState("")





    return (
        <MovieNameContext.Provider
            value={{ movieName, setmovieName }}>
            {children}
        </MovieNameContext.Provider>
    );
};