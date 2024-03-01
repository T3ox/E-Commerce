import React from "react";
import { CredentialResponse } from "@react-oauth/google";
import googleUserData from "../../API/GoogleUserData";

export interface UserContext {
    userData: googleUserData | undefined;
    setUserData: React.Dispatch<
        React.SetStateAction<googleUserData | undefined>
    >;
    googleLogin: (res: CredentialResponse) => void;
    formLogin: (username: string, password: string) => void;
    doLogout: () => void;
    isAuth: () => boolean | undefined;
}
