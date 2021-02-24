import React, { useState, useEffect, useContext } from "react";
import { MovieNameContaxt } from "./MovieNameContaxt";

export const SelectedArrayContext = React.createContext();

export const SelectedArrayProvider = ({ children }) => {


    const [selectedArray, setSelectedArray] = useState([]);


    const { movieName, setmovieName } = useContext(MovieNameContaxt)





    return (
        <SelectedArrayContext.Provider
            value={{ selectedArray, setSelectedArray }}>
            {children}
        </SelectedArrayContext.Provider>
    );
};