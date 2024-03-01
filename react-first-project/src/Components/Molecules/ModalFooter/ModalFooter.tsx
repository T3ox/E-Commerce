import React from "react";
import { Props } from "../../Organisms/CartModal/types";
import Button from "../../atoms/Button/Button";

const ModalFooter: React.FC<Props> = ({ handle }) => {
    return (
        <div className="modal-footer">
            <Button
                className="btn btn-secondary"
                data-bs-dismiss="modal"
                handle={handle}
                title="Go To Checkout"
            />
        </div>
    );
};

export default ModalFooter;
