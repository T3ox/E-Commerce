import React from "react";
import { useCart } from "../../../context/Cart";
import "./styles.scss";

const CheckoutCart = () => {
    const { shoppingCart } = useCart();

    return (
        <table className="checkout-products">
            {shoppingCart?.map((product) => (
                <tr>
                    <td>
                        <img
                            src={product.image}
                            alt="product"
                            className="img-fluid img-thumbnail"
                        />
                    </td>
                    <td>{product.title}</td>
                    <td>
                        <input
                            type="number"
                            className="form-control p-1"
                            disabled={true}
                            value={product.count}
                        />
                    </td>
                    <td>€ {product.price.toFixed(2)}</td>
                </tr>
            ))}
        </table>
    );
};

export default CheckoutCart;
