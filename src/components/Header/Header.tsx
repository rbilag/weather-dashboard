/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/react";

const header = css({
    display: "flex",
    justifyContent: "flex-end",
    "& .city-name": {
        color: "white",
        fontSize: "6rem",
        padding: "8rem 10rem",
    },
    "@media(max-width: 1920px)": {
        "& .city-name": {
            fontSize: "4rem",
            padding: "4rem 5rem",
        },
    },
    "@media(max-width: 965px)": {
        "& .city-name": {
            fontSize: "3rem",
            padding: "2rem 3rem",
        },
    },
    "@media(max-width: 800px)": {
        position: "absolute",
        top: 0,
        right: 0,
    },
    "@media(max-width: 420px)": {
        "& .city-name": {
            fontSize: "2rem",
            padding: "1rem",
        },
    },
    "@media(max-width: 376px)": {
        "& .city-name": {
            fontSize: "1.5rem",
            padding: "1rem",
        },
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
