import React from "react";
import { useUser } from "../../../context/User";
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute: React.FC = () => {
    const { isAuth } = useUser();

    return isAuth() ? <Outlet /> : <Navigate to="/login" />;
};
export default ProtectedRoute;
