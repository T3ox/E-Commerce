import axios from "axios";
import APIProduct from "./APIData";

const fakeProductsURL: string = "https://fakestoreapi.com/products";

const getProducts = async (): Promise<APIProduct[]> => {
    try {
        const response= await axios.get(fakeProductsURL);
        return response.data;
    } catch (error) {
        console.log(error);
    }
    return [];
};

export default getProducts;