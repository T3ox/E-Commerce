import React from "react";
import Lottie from "react-lottie-player";
import LoginForm from "../../Molecules/LoginForm/LoginForm";
import background from "../../../images/LoginBackground.json";
import "./style.scss";

const Login: React.FC = () => {
    return (
        <>
            <LoginForm />
            <Lottie
                loop
                play
                className="background-animation"
                rendererSettings={{ preserveAspectRatio: "xMidYMid slice" }}
                animationData={background}
            />
        </>
    );
};

export default Login;
