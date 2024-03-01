import { BsStar, BsStarFill, BsStarHalf } from "react-icons/bs";
import React from "react";
import Props from "./types";
import "./style.scss";

const CardRating: React.FC<Props> = ({ rating, className }) => {
    const { rate, count } = rating;

    return rating ? (
        <div className={`stars-container ${className}`}>
            {Array.from({ length: 5 }, (_, index: number) => {
                if (rate === undefined) {
                    return <BsStar key={index} />;
                } else if (rate >= index + 1) {
                    return <BsStarFill key={index} />;
                } else if (rate >= index + 0.5) {
                    return <BsStarHalf key={index} />;
                } else {
                    return <BsStar key={index} />;
                }
            })}
            <small className="counter">{count}</small>
        </div>
    ) : null;
};

export default CardRating;
