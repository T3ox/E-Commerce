import React, { useCallback, useMemo } from "react";
import Props from "./types";
import Button from "../../atoms/Button/Button";
import "./style.scss";

const Pagination: React.FC<Props> = ({
    data,
    productsPerPage,
    currentPage,
    onPageChange,
}) => {
    const numberOfPages = useMemo(
        () => Math.ceil(data.length / productsPerPage),
        [data, productsPerPage],
    );
    const isFirstPage = currentPage === 1;
    const isLastPage = currentPage === numberOfPages;

    const handlePageChange = useCallback(
        (newPage: number) => {
            const newLast: number = newPage * productsPerPage;
            const newFirst: number = newLast - productsPerPage;
            onPageChange(newPage, newFirst, newLast);
            window.scrollTo(0, 0);
        },
        [onPageChange, productsPerPage],
    );

    return (
        <div className="pagination pb-3">
            <Button
                className="btn rounded-pill button-page-navigation custom-button"
                title={"Prev Page"}
                handle={() => handlePageChange(currentPage - 1)}
                disabled={isFirstPage}
            />
            {currentPage + "/" + numberOfPages}
            <Button
                className="btn rounded-pill button-page-navigation custom-button"
                title={"Next Page"}
                handle={() => handlePageChange(currentPage + 1)}
                disabled={isLastPage}
            />
        </div>
    );
};

export default Pagination;
