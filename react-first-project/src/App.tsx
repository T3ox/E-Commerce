import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { GoogleOAuthProvider } from "@react-oauth/google";
import Login from "./Components/Pages/Login/Login";
import ProtectedRoute from "./Components/Molecules/ProtectedRoute/ProtectedRoute";
import ProductsList from "./Components/Pages/ProductsList/ProductsList";
import { AppProvider } from "./context";
import Checkout from "./Components/Pages/Checkout/Checkout";

const App = () => {
    return (
        <BrowserRouter>
            <AppProvider>
                <GoogleOAuthProvider
                    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID!}
                >
                    <Routes>
                        <Route path="/login" element={<Login />} />
                        <Route path="/" element={<ProtectedRoute />}>
                            <Route path="/" element={<ProductsList />} />
                            <Route path="/checkout" element={<Checkout />} />
                        </Route>
                    </Routes>
                </GoogleOAuthProvider>
            </AppProvider>
        </BrowserRouter>
    );
};

export default App;
