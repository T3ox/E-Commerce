import GoogleUserData from "./GoogleUserData";
import axios from "axios";

const AxiosLogin = (
    username: string,
    password: string,
    onSuccess: (userData: GoogleUserData) => void,
    onError: (error: any) => void,
) => {
    axios({
        url: "https://fakestoreapi.com/auth/login",
        method: "POST",
        data: {
            username: username,
            password: password,
        },
    })
        .then(() => {
            const userData: GoogleUserData = {
                email: "",
                emailVerified: true,
                username: username,
            };
            onSuccess(userData);
        })
        .catch((error) => {
            onError(error);
        });
};

export default AxiosLogin;
