import React from "react";
import { Modal } from "react-modal-tezuka";

interface ModaleProps {
    onClose: () => void;
}

const Modale: React.FC<ModaleProps> = ({ onClose }) => {
    return (
        <div>
            <Modal show={true} onClose={onClose} />
        </div>
    );
};

export default Modale;
