import React, {
    createContext,
    useCallback,
    useContext,
    useEffect,
    useMemo,
    useState,
} from "react";
import APIProduct from "../../API/APIData";
import CartContext from "./types";
import Props from "../types";
import { getLocalShoppingCart, setLocalShoppingCart } from "../../localStorage";
import { useNavigate } from "react-router-dom";

const Context = createContext<CartContext>({
    shoppingCart: [],
    total: 0,
    setTotal: () => {},
    addToCart: () => {},
    handleQtyChange: () => {},
    updateTotal: () => {},
    updateCart: () => {},
    productsCount: () => 0,
    paymentSucceeded: () => {},
});

export const CartProvider = ({ children }: Props) => {
    const [shoppingCart, setShoppingCart] = useState<APIProduct[]>([]);
    const [total, setTotal] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const localShoppingCart = getLocalShoppingCart();

        if (localShoppingCart) {
            setShoppingCart(JSON.parse(localShoppingCart));
        }
    }, []);

    const handleQtyChange = useCallback(
        (id: number, newQty: number) => {
            const updatedCart = shoppingCart.map((item) => {
                if (item.id === id) {
                    return { ...item, count: newQty };
                } else {
                    return item;
                }
            });
            console.log(updatedCart);
            updateCart(updatedCart);
        },
        [shoppingCart],
    );

    const updateTotal = useCallback(() => {
        let sum: number = 0;
        shoppingCart.forEach((product) => {
            sum += product.price * product.count;
        });
        setTotal(sum);
    }, [shoppingCart]);

    const productsCount = useCallback(() => {
        let count: number = 0;
        shoppingCart.forEach((product: APIProduct) => {
            count += product.count;
        });
        return count;
    }, [shoppingCart]);

    const updateCart = useCallback((shoppingCart: APIProduct[]) => {
        setShoppingCart(shoppingCart);
        setLocalShoppingCart(JSON.stringify(shoppingCart));
    }, []);

    const addToCart = useCallback(
        (productToAdd: APIProduct) => {
            const existingProductIndex = shoppingCart.findIndex(
                (product) => product.id === productToAdd.id,
            );

            if (existingProductIndex !== -1) {
                const updatedCart = [...shoppingCart];
                updatedCart[existingProductIndex].count += 1;
                updateCart(updatedCart);
            } else {
                const updatedCart = [
                    ...shoppingCart,
                    { ...productToAdd, count: 1 },
                ];
                updateCart(updatedCart);
            }
        },
        [shoppingCart, setShoppingCart],
    );

    const paymentSucceeded = useCallback(() => {
        console.log("Successfully");
        updateCart([]);
    }, []);

    const MemorizedValue = useMemo(() => {
        const value: CartContext = {
            shoppingCart,
            total,
            setTotal,
            addToCart,
            handleQtyChange,
            updateTotal,
            updateCart,
            productsCount,
            paymentSucceeded,
        };
        return value;
    }, [
        shoppingCart,
        total,
        setTotal,
        addToCart,
        handleQtyChange,
        updateTotal,
        updateCart,
        productsCount,
        paymentSucceeded,
    ]);

    return (
        <Context.Provider value={MemorizedValue}>{children}</Context.Provider>
    );
};

export const useCart = (): CartContext => useContext(Context);
