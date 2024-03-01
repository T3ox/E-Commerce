import React, { useCallback, useEffect, useState } from "react";
import APIProduct from "../../../API/APIData";
import getProducts from "../../../API/GetProducts";
import Card from "../../Molecules/Card/Card";
import Pagination from "../../Molecules/Pagination/Pagination";
import LogoutHeader from "../../Molecules/LogoutHeader/LogoutHeader";
import CartModal from "../../Organisms/CartModal/CartModal";
import "./style.scss";
import { useCart } from "../../../context/Cart";

const ProductsList = () => {
    const productsPerPage: number = 6;
    const [data, setData] = useState<APIProduct[]>();
    const [currentPage, setCurrentPage] = useState(1);
    const [filteredProducts, setFilteredProducts] = useState<APIProduct[]>();
    const [showModal, setShowModal] = useState(false);

    const { shoppingCart, updateCart } = useCart();

    const onPageChange = useCallback(
        (newPage: number, indexOfFirst: number, indexOfLast: number) => {
            setCurrentPage(newPage);
            setFilteredProducts(data?.slice(indexOfFirst, indexOfLast));
        },
        [data],
    );

    const closeModal = useCallback(() => {
        setShowModal(false);
        updateCart(shoppingCart.filter((item) => item.count > 0));
    }, [shoppingCart, updateCart]);

    useEffect(() => {
        const getData = async () => {
            const data: APIProduct[] = await getProducts();
            setData(data);
            setFilteredProducts(data?.slice(0, productsPerPage));
        };
        getData();
    }, []);

    if (data) {
        return (
            <>
                <div>
                    <LogoutHeader handle={() => setShowModal(true)} />
                    <div className="container products-container">
                        <div className={`products-list row mb-2`}>
                            {filteredProducts?.map((product) => {
                                return (
                                    <div className="col-12 col-md-6 mr-lg-2 col-xl-4">
                                        <Card
                                            product={product}
                                            key={product?.id}
                                        />
                                    </div>
                                );
                            })}
                        </div>
                        {showModal ? (
                            <CartModal
                                handle={closeModal}
                                showModal={showModal}
                            />
                        ) : null}
                    </div>
                    <div className="pagination">
                        <Pagination
                            data={data}
                            productsPerPage={productsPerPage}
                            currentPage={currentPage}
                            onPageChange={onPageChange}
                        />
                    </div>
                </div>
                {showModal && <div className="overlay-background"></div>}
            </>
        );
    } else {
        return <h2>...loading</h2>;
    }
};

export default ProductsList;
