import React from "react";
import "./card.css";

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
    return (
        <div className={`card card--${size}`}>
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
