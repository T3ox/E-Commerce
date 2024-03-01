import React from "react";
import Props from "./types";
import "./style.scss";

const CardSubtitle: React.FC<Props> = ({ text }) => {
    const maxLength: number = 135;
    return (
        <h4 className="card-subtitle">
            {text.length < maxLength ? text : text + "..."}
        </h4>
    );
};

export default CardSubtitle;
