import React, { useState } from "react";
import { Props } from "./types";
import "./style.scss";
import Button from "../Button/Button";

const LoginInput: React.FC<Props> = ({
    placeholder,
    rightIcon,
    isPassword,
    onChangeText,
}) => {
    const [showPassword, setShowPassword] = useState(isPassword);
    return (
        <div className="container-fluid w-75 mb-3">
            <div className="row flex-nowrap">
                <div className="input-group align-items-center border rounded-pill bg-white">
                    <div className="col-11">
                        <input
                            placeholder={placeholder}
                            type={showPassword ? "password" : "text"}
                            className="input-field border-0 bg-transparent"
                            onChange={(event) => {
                                onChangeText(event.target.value);
                            }}
                        />
                    </div>
                    <div className="col-1">
                        <Button
                            className={`${
                                isPassword ? "" : "clickable"
                            } btn border-0 bg-transparent`}
                            handle={() => {
                                setShowPassword(
                                    isPassword ? !showPassword : showPassword,
                                );
                            }}
                        >
                            {rightIcon}
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginInput;
