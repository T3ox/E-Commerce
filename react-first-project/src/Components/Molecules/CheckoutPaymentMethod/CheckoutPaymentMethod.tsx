import React from "react";
import "./styles.scss";
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import Props from "./types";

const CheckoutPaymentMethod: React.FC<Props> = ({ onApprove }) => {
    const initialOptions = {
        clientId: "test",
        currency: "EUR",
        intent: "capture",
    };

    return (
        <div className="container-payment">
            <h2>Payment Method</h2>

            <div className="payment-methods">
                <PayPalScriptProvider options={initialOptions}>
                    <PayPalButtons
                        onApprove={async () => onApprove()}
                        onError={async () => console.log("error")}
                    />
                </PayPalScriptProvider>
            </div>
        </div>
    );
};

export default CheckoutPaymentMethod;
