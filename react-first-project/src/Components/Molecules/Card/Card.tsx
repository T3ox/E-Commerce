import React from "react";
import CardTitle from "../../atoms/CardTitle/CardTitle";
import CardSubtitle from "../../atoms/CardSubtitle/CardSubtitle";
import CardRating from "../../atoms/CardRating/CardRating";
import Props from "./types";
import "./style.scss";
import Button from "../../atoms/Button/Button";
import { useCart } from "../../../context/Cart";

const placeholder: string =
    "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png?format=jpg&quality=90&v=1530129081";

const Card: React.FC<Props> = ({ product }) => {
    const { title, price, description, image, rating } = product;
    const { addToCart } = useCart();

    return (
        <div className={`product-card`}>
            <img
                className="product-image"
                src={image || placeholder}
                alt={"placeholder"}
            />
            {title && <CardTitle text={title} />}
            {description && <CardSubtitle text={description} />}{" "}
            {price && <CardSubtitle text={`€ ${price?.toString()}`} />}{" "}
            <CardRating rating={rating} className="mb-3" />
            <Button
                className="btn rounded-pill button-page-navigation custom-button mb-2"
                title="Aggiungi al Carrello"
                handle={() => addToCart(product)}
            />
        </div>
    );
};

export default Card;
