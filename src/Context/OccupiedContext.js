import React, { useState, useEffect, useContext } from "react";
import { MovieNameContext } from "./MovieNameContext";

export const OccupiedContext = React.createContext();

export const OccupiedProvider = ({ children }) => {


    const [Occupied, setOccupied] = useState(["A1", "B5"]);





    return (
        <OccupiedContext.Provider
            value={{ Occupied, setOccupied }}>
            {children}
        </OccupiedContext.Provider>
    );
};