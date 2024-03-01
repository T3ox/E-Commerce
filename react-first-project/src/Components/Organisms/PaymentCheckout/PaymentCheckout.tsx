import React, { useEffect, useState } from "react";
import CheckoutCart from "../../Molecules/CheckoutCart/CheckoutCart";
import { useCart } from "../../../context/Cart";
import "./style.scss";

const PaymentCheckout = () => {
    const { total } = useCart();

    const [checkoutTotal, setCheckoutTotal] = useState("");

    useEffect(() => {
        setCheckoutTotal(total.toFixed(2));
    }, [total]);

    return (
        <>
            <h2>CheckOut</h2>
            <div className="cart">
                <CheckoutCart />
            </div>
            <div className="d-flex justify-content-end border-top pt-3 mt-5">
                <h5>
                    Total:{" "}
                    <span className="price text-success">€{checkoutTotal}</span>
                </h5>
            </div>
        </>
    );
};

export default PaymentCheckout;
