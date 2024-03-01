import React, { useCallback, useState } from "react";
import LoginInput from "../../atoms/LoginInput/LoginInput";
import { GoogleLogin } from "@react-oauth/google";
import { useUser } from "../../../context/User";
import Button from "../../atoms/Button/Button";
import { ReactComponent as Email } from "../../../images/email.svg";
import { ReactComponent as PasswordLock } from "../../../images/lock.svg";
import "./style.scss";

const LoginForm = () => {
    const { googleLogin, formLogin } = useUser();
    const [loginForm, setLoginForm] = useState({
        username: "",
        password: "",
    });

    const onChangeEmail = useCallback(
        (username: string) => {
            setLoginForm({ ...loginForm, username });
        },
        [loginForm],
    );

    const onChangePassword = useCallback(
        (password: string) => {
            setLoginForm({ ...loginForm, password });
        },
        [loginForm],
    );

    return (
        <div className="container-fluid vh-100">
            <div className="row vh-100 align-content-center justify-content-center">
                <div className="col-11 col-sm-8 col-md-6 col-lg-5 col-xl-4">
                    <form
                        className="login-form"
                        onSubmit={(event) => {
                            event.preventDefault();
                            formLogin(loginForm.username, loginForm.password);
                        }}
                    >
                        <h1 className="text-center py-5">Benvenuto!</h1>
                        <LoginInput
                            placeholder="Username"
                            isPassword={false}
                            rightIcon={<Email />}
                            onChangeText={onChangeEmail}
                        />
                        <LoginInput
                            placeholder="Password"
                            isPassword={true}
                            rightIcon={<PasswordLock />}
                            onChangeText={onChangePassword}
                        />
                        <div className="row mb-4 justify-content-center">
                            <Button
                                title="Login"
                                className="btn rounded-pill button-form"
                            />
                        </div>
                        <div className="d-flex justify-content-center align-items-center pb-5">
                            <GoogleLogin
                                theme="outline"
                                shape="circle"
                                onSuccess={googleLogin}
                                onError={() => {
                                    console.log("Login Failed");
                                }}
                                useOneTap
                            />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default LoginForm;
