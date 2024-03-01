import googleUserData from "../../API/GoogleUserData";
import GoogleUserData from "../../API/GoogleUserData";
import React, {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
} from "react";
import { useNavigate } from "react-router-dom";
import { CredentialResponse } from "@react-oauth/google";
import { jwtDecode, JwtPayload } from "jwt-decode";
import { UserContext } from "./types";
import axiosLogin from "../../API/AxiosLogin";
import { getLocalUserdata, setLocalUserdata } from "../../localStorage";
import Props from "../types";
import { useCart } from "../Cart";

const Context = createContext<UserContext>({
    userData: {
        emailVerified: false,
        email: "",
        username: "",
    },
    setUserData: () => {},
    googleLogin: () => null,
    formLogin: () => null,
    doLogout: () => null,
    isAuth: () => false,
});

export const UserProvider = ({ children }: Props) => {
    const [userData, setUserData] = useState<googleUserData | undefined>(
        undefined,
    );
    const navigate = useNavigate();
    const { updateCart } = useCart();

    useEffect(() => {
        setUserData(() => {
            if (getLocalUserdata()) {
                return JSON.parse(getLocalUserdata()!);
            } else {
                return { emailVerified: false, email: "", username: "" };
            }
        });
    }, []);

    const doLogin = (userData: googleUserData) => {
        setLocalUserdata(JSON.stringify(userData));
        setUserData(userData);
        updateCart([]);
        // setShoppingCart(JSON.parse("[]"));
        // setLocalShoppingCart("[]");
        navigate("/");
    };

    const googleLogin = useCallback((res: CredentialResponse) => {
        const tempData: JwtPayload = jwtDecode(res.credential!);
        setUserData(() => {
            const convertedUserData = convertToUserData(tempData);
            doLogin(convertedUserData);
            return convertedUserData;
        });
    }, []);

    const formLogin = useCallback((username: string, password: string) => {
        axiosLogin(
            username,
            password,
            (userData) => {
                doLogin(userData);
            },
            (error) => {
                console.log(error.response);
            },
        );
    }, []);

    const doLogout = useCallback(() => {
        setLocalUserdata("");
        if (setUserData) {
            setUserData({
                email: "",
                emailVerified: false,
                username: "",
            });
        }
    }, []);

    const isAuth = useCallback(() => {
        const storedUser = getLocalUserdata();

        return !!storedUser;
    }, []);

    const convertToUserData = (googleUser: any): GoogleUserData => {
        return {
            emailVerified: googleUser.email_verified,
            email: googleUser.email,
            username: googleUser.name,
        };
    };

    const MemorizedValue = useMemo(() => {
        const value: UserContext = {
            userData,
            setUserData,
            googleLogin,
            formLogin,
            doLogout,
            isAuth,
        };
        return value;
    }, [userData, setUserData, googleLogin, formLogin, doLogout, isAuth]);

    return (
        <Context.Provider value={MemorizedValue}>{children}</Context.Provider>
    );
};

export const useUser = (): UserContext => useContext(Context);
