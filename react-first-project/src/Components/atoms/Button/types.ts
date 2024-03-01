import React from "react";

interface Props {
    rightIcon?: React.ReactElement;
    leftIcon?: React.ReactElement;
    children?: React.ReactElement;
    title?: string;
    handle?: () => void;
    disabled?: boolean;
    className: string;
}

export default Props;
