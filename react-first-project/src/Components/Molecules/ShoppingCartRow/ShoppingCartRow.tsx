import React, { useEffect, useState } from "react";
import APIProduct from "../../../API/APIData";
import "./style.scss";
import Button from "../../atoms/Button/Button";

const ShoppingCartRow: React.FC<
    APIProduct & {
        onQuantityChange: (newQuantity: number) => void;
    }
> = ({ onQuantityChange, title, price, image, count }) => {
    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        setQuantity(count);
    }, [count]);

    return (
        <tr>
            <td id="product-image">
                <img
                    src={image}
                    alt="product"
                    className="img-fluid img-thumbnail"
                />
            </td>
            <td id="product-name">{title}</td>
            <td id="product-qty">
                <div className="quantity-selector">
                    <Button
                        handle={() => onQuantityChange(quantity - 1)}
                        className={`btn ${quantity === 0 ? "disabled" : ""}`}
                        title="-"
                    />
                    <input
                        type="number"
                        className="form-control p-1"
                        contentEditable={true}
                        value={quantity}
                        onChange={(e) => {
                            setQuantity(parseInt(e.target.value));
                        }}
                        onBlur={(e) => {
                            const newValue =
                                e.target.value.trim() !== ""
                                    ? parseInt(e.target.value)
                                    : 0;
                            onQuantityChange(newValue);
                        }}
                    />
                    <Button
                        handle={() => onQuantityChange(quantity + 1)}
                        className="btn"
                        title="+"
                    />
                </div>
            </td>
            <td id="product-price">€ {price}</td>
        </tr>
    );
};

export default ShoppingCartRow;
