import React from 'react'
import { FcMenu, FcSearch } from 'react-icons/fc';
import { MdLocalMovies } from 'react-icons/md';


import "../styles/Navbar.css"
export const Navbar = () => {
    return (
        <div className="nav">
            <div className="nav-top">
                <FcMenu className="nav-icons" /> <MdLocalMovies className="nav-icons" /> <FcSearch className="nav-icons" />
            </div>

        </div>
    )
}

