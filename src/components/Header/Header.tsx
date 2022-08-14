import React from "react";
import "./header.css";

interface HeaderProps {
    city: string;
}

function Header({ city }: HeaderProps) {
    return (
        <header>
            <span className="city-name"> {city} </span>
        </header>
    );
}

export default Header;
