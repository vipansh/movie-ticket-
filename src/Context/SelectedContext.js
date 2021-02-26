import React, { useState, useEffect, useContext } from "react";
import { MovieNameContext } from "./MovieNameContext";

export const SelectedArrayContext = React.createContext();

export const SelectedArrayProvider = ({ children }) => {


    const [selectedArray, setSelectedArray] = useState([]);


    const { movieName, setmovieName } = useContext(MovieNameContext)





    return (
        <SelectedArrayContext.Provider
            value={{ selectedArray, setSelectedArray }}>
            {children}
        </SelectedArrayContext.Provider>
    );
};