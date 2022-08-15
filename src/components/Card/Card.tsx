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
    fontSize: "calc(24px + 5vmin)",
    padding: "calc(6px + 5vmin)",
    "& .card-icon": {
        fontSize: "calc(18px + 5vmin)",
        flexGrow: 1,
    },
    "& .card-text": {
        flexGrow: 2,
    },
});
const mediumCard = css(baseCard, {
    fontSize: "calc(60px + 5vmin)",
    padding: "calc(24px + 5vmin)",
    "& .card-icon": {
        fontSize: "calc(48px + 5vmin)",
    },
});
const largeCard = css(baseCard, {
    flexDirection: "column",
    fontSize: "calc(60px + 5vmin)",
    padding: "calc(48px + 5vmin)",
    "& .card-icon": {
        fontSize: "calc(192px + 5vmin)",
        marginBottom: "4rem",
    },
    "& .card-text": {
        textTransform: "lowercase",
        fontFamily: "League Gothic Condensed, sans-serif",
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
