import React, { useEffect } from "react";
import { useCart } from "../../../context/Cart";
import "./style.scss";
import ShoppingCartRow from "../../Molecules/ShoppingCartRow/ShoppingCartRow";
import { Props } from "./types";
import ModalFooter from "../../Molecules/ModalFooter/ModalFooter";
import Button from "../../atoms/Button/Button";
import { useNavigate } from "react-router-dom";

const CartModal: React.FC<Props> = ({ handle, showModal }) => {
    const { shoppingCart, handleQtyChange, total, updateTotal } = useCart();
    const navigate = useNavigate();

    useEffect(() => {
        updateTotal();
    }, [shoppingCart]);

    return (
        <div
            className={`modal fade ${showModal ? "show" : " "}`}
            id="staticBackdrop"
            data-bs-backdrop="static"
            data-bs-keyboard="false"
            tabIndex={-1}
            aria-labelledby="staticBackdropLabel"
            aria-hidden="true"
        >
            <div
                className="modal-dialog modal-lg modal-dialog-centered"
                role="document"
            >
                <div className="modal-content">
                    <div className="modal-header border-bottom-0">
                        <h5 className="modal-title" id="staticBackdropLabel">
                            Cart
                        </h5>
                        <Button
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                            handle={handle}
                        />
                    </div>
                    <div className="modal-body">
                        <table className="table table-image">
                            <thead>
                                <tr>
                                    <th scope="col"></th>
                                    <th scope="col">Products Name</th>
                                    <th scope="col">Qty</th>
                                    <th scope="col">Price</th>
                                </tr>
                            </thead>
                            <tbody>
                                {shoppingCart?.map((product) => (
                                    <ShoppingCartRow
                                        key={product.id}
                                        {...product}
                                        onQuantityChange={(newQuantity) => {
                                            handleQtyChange(
                                                product.id,
                                                newQuantity,
                                            );
                                        }}
                                    />
                                ))}
                            </tbody>
                        </table>
                        <div className="d-flex justify-content-end">
                            <h5>
                                Total:{" "}
                                <span className="price text-success">
                                    €{total.toFixed(2)}
                                </span>
                            </h5>
                        </div>
                    </div>
                    <ModalFooter
                        handle={() => {
                            if (total > 0) {
                                navigate("/checkout");
                            }
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default CartModal;
