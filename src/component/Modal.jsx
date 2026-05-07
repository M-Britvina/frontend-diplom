import React, { useState } from 'react';
import './Modal.css';

const Modal = ({ isOpen, onClose, isError, content }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal">
                <div className={"modal-header " + (isError ? "modal-header-error" : "modal-header-info")}>
                    <img className="modal-image" src="/img/modal.png" />
                </div>

                <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                    {content}
                </div>
                <div className="modal-footer">
                    <button className="modal-button" onClick={onClose}>Понятно</button>
                </div>
            </div>
        </div>
    );
};

export default Modal;
