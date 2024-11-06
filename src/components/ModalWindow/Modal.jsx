import React from 'react';
import clases from './Modal.module.scss'

const Modal = ({children , isActiveModal , setIsActiveModal}) => {
    return (
        <div className={ isActiveModal ? `${clases.modal} ${clases.active} ` : clases.modal } onClick={ () => setIsActiveModal( false ) }  >
            <div className={clases.modal_wrapper} onClick={ (Event) => (Event.stopPropagation()) } >
                {children}
            </div>
        </div>
    );
};

export default Modal;