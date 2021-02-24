import React, { useState, useEffect, useContext } from "react";
import { MovieNameContaxt } from "./MovieNameContaxt";

export const AccupiedContext = React.createContext();

export const AccupiedProvider = ({ children }) => {


    const [Accupied, setAccupied] = useState(["A1", "B5"]);





    return (
        <AccupiedContext.Provider
            value={{ Accupied, setAccupied }}>
            {children}
        </AccupiedContext.Provider>
    );
};