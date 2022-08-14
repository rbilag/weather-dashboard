/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/react";

const header = css({
    display: "flex",
    justifyContent: "flex-end",
    "& .city-name": {
        color: "white",
        fontSize: "calc(24px + 5vmin)",
        padding: "8rem 10rem",
    },
});

interface HeaderProps {
    city: string;
}

function Header({ city }: HeaderProps) {
    return (
        <header css={header}>
            <span className="city-name"> {city} </span>
        </header>
    );
}

export default Header;
