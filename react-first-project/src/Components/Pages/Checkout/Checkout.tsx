import React, { useState } from "react";
import CheckoutCart from "../../Organisms/PaymentCheckout/PaymentCheckout";
import CheckoutPaymentMethod from "../../Molecules/CheckoutPaymentMethod/CheckoutPaymentMethod";
import { useCart } from "../../../context/Cart";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
    const [success, setSuccess] = useState(false);
    const { paymentSucceeded } = useCart();
    const navigate = useNavigate();

    return success ? (
        <h1>Payment Completed...</h1>
    ) : (
        <div className="container">
            <div className="row">
                <div className="col-12 col-md-7 py-sm-5 border-end">
                    <CheckoutCart />
                </div>
                <div className="col-12 col-md-5 ">
                    <CheckoutPaymentMethod
                        onApprove={() => {
                            setSuccess(true);
                            paymentSucceeded();
                            setTimeout(() => {
                                navigate("/");
                            }, 3000);
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default Checkout;
