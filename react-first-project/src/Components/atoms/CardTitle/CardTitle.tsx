import React from "react";
import Props from "./types";
import "./style.scss";

const CardTitle: React.FC<Props> = ({ text }) => {
    return <h3 className="card-title">{text}</h3>;
};

export default CardTitle;
