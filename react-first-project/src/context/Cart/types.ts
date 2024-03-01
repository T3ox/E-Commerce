import APIProduct from "../../API/APIData";
import React from "react";

export default interface CartContext {
    shoppingCart: APIProduct[];
    total: number;
    setTotal: React.Dispatch<React.SetStateAction<number>>;
    addToCart: (product: APIProduct) => void;
    handleQtyChange: (itemId: number, newQuantity: number) => void;
    updateTotal: () => void;
    updateCart: (shoppingCart: APIProduct[]) => void;
    productsCount: () => number;
    paymentSucceeded: () => void;
}
