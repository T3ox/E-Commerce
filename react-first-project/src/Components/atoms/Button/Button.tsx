import React from "react";
import Props from "./types";
import "./style.scss";

const Button: React.FC<Props> = ({ ...props }) => {
    const {
        title,
        leftIcon,
        rightIcon,
        handle,
        disabled,
        className,
        children,
    } = props;

    return (
        <button
            className={
                disabled
                    ? `btn-secondary ${className} disabled-button`
                    : `btn-primary ${className}`
            }
            onClick={handle}
            disabled={disabled}
        >
            <div>
                {leftIcon}
                {title}
                {children}
                {rightIcon}
            </div>
        </button>
    );
};

export default Button;
