/** @jsxRuntime classic */
/** @jsx jsx */
import React from "react";
import { jsx, css } from "@emotion/react";

const baseCard = css({
    color: "white",
    border: 0,
    borderRadius: "3rem",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    lineHeight: 1,
});
const smallCard = css(baseCard, {
    fontSize: "8rem",
    padding: "1rem",
    justifyContent: "flex-start",
    "& .card-icon": {
        fontSize: "6rem",
        width: "8rem",
    },
    "& .card-text": {
        flexGrow: 2,
    },
    "@media(max-width: 1920px)": {
        fontSize: "5rem",
    },
    "@media(max-width: 965px)": {
        fontSize: "4rem",
        "& .card-icon": {
            fontSize: "2.5rem",
            width: "4rem",
        },
    },
    "@media(max-width: 800px)": {
        fontSize: "6rem",
        "& .card-icon": {
            fontSize: "4rem",
            width: "6rem",
        },
    },
    "@media(max-width: 625px)": {
        fontSize: "5rem",
        "& .card-icon": {
            width: "5rem",
        },
    },
    "@media(max-width: 376px)": {
        fontSize: "3rem",
        "& .card-icon": {
            fontSize: "3rem",
        },
    },
});
const mediumCard = css(baseCard, {
    fontSize: "20rem",
    padding: "1rem",
    "& .card-icon": {
        fontSize: "20rem",
    },
    "@media(max-width: 1920px)": {
        fontSize: "15rem",
    },
    "@media(max-width: 965px)": {
        fontSize: "10rem",
    },
    "@media(max-width: 800px)": {
        fontSize: "15rem",
    },
    "@media(max-width: 625px)": {
        fontSize: "13rem",
    },
    "@media(max-width: 420px)": {
        fontSize: "8rem",
    },
    "@media(max-width: 376px)": {
        fontSize: "6rem",
    },
});
const largeCard = css(baseCard, {
    flexDirection: "column",
    fontSize: "8rem",
    padding: "1rem",
    "& .card-icon": {
        fontSize: "30rem",
        marginBottom: "4rem",
    },
    "& .card-text": {
        textTransform: "lowercase",
        fontFamily: "League Gothic Condensed, sans-serif",
    },
    "@media(max-width: 1920px)": {
        fontSize: "6rem",
        "& .card-icon": {
            fontSize: "20rem",
            marginBottom: "3rem",
        },
    },
    "@media(max-width: 1370px)": {
        fontSize: "4rem",
        "& .card-icon": {
            fontSize: "15rem",
        },
    },
    "@media(max-width: 965px)": {
        fontSize: "3rem",
        "& .card-icon": {
            fontSize: "12rem",
        },
    },
    "@media(max-width: 800px)": {
        fontSize: "5rem",
        "& .card-icon": {
            fontSize: "20rem",
            marginBottom: "4rem",
        },
    },
    "@media(max-width: 625px)": {
        "& .card-icon": {
            fontSize: "18rem",
        },
    },
    "@media(max-width: 420px)": {
        "& .card-icon": {
            fontSize: "13rem",
        },
    },
    "@media(max-width: 376px)": {
        fontSize: "3rem",
        "& .card-icon": {
            fontSize: "12rem",
            marginBottom: "2rem",
        },
    },
});

interface CardProps {
    /**
     * How large should the card be?
     */
    size?: "small" | "medium" | "large";
    /**
     * Card content
     */
    text: string;
    /**
     * Card content icon
     */
    icon?: string;
}

/**
 * Primary UI component for displaying specific data
 */
function Card({ size = "medium", text, icon }: CardProps) {
    const cardStyle = () => {
        switch (size) {
            case "small":
                return smallCard;
            case "large":
                return largeCard;
            default:
                return mediumCard;
        }
    };

    return (
        <div css={cardStyle}>
            {icon && (
                <div className="card-icon">
                    <i className={icon} />
                </div>
            )}
            <div className="card-text">{text}</div>
        </div>
    );
}

export default Card;
