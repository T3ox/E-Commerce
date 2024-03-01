import APIProduct from "../../../API/APIData";

interface Props {
    data: APIProduct[];
    productsPerPage: number;
    currentPage: number;
    onPageChange: (
        newPage: number,
        indexOfFirst: number,
        indexOfLast: number,
    ) => void;
}

export default Props;