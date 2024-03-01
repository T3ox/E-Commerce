const getLocalUserdata = () => {
    return localStorage.getItem("username");
};

const setLocalUserdata = (userData: string) => {
    localStorage.setItem("username", userData);
};

const getLocalShoppingCart = () => {
    return localStorage.getItem("shoppingCart");
};

const setLocalShoppingCart = (shoppingCart: string) => {
    localStorage.setItem("shoppingCart", shoppingCart);
};

export {
    getLocalUserdata,
    setLocalUserdata,
    getLocalShoppingCart,
    setLocalShoppingCart,
};
