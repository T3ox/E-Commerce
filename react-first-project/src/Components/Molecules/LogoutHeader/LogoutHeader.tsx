import React from "react";
import Button from "../../atoms/Button/Button";
import { useUser } from "../../../context/User";
import { useCart } from "../../../context/Cart";
import { ReactComponent as ShoppingCart } from "../../../images/shoppingCart.svg";
import "./style.scss";
import { Props } from "./type";

const LogoutHeader: React.FC<Props> = ({ handle }) => {
    const { userData, doLogout } = useUser();
    const { shoppingCart, productsCount } = useCart();

    return (
        <div className="header">
            {userData?.username}
            <Button
                title="Log out"
                handle={doLogout}
                className="btn btn-primary rounded-pill button-page-navigation custom-button"
            />
            <Button
                className="bg-transparent border-0"
                handle={handle}
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
            >
                <>
                    <ShoppingCart />
                    {shoppingCart.length > 0 && (
                        <span className="badge bg-primary rounded-circle count-badge">
                            {productsCount()}
                        </span>
                    )}
                </>
            </Button>
        </div>
    );
};

export default LogoutHeader;
