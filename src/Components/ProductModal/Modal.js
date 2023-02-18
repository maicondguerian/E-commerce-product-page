import style from './ProductModal.module.css';
import { GrClose } from "react-icons/gr";
import Overlay from '../Overlay/Overlay';


export const Modal = ({ isOpen, onClose, children, onMouseOver ,onMouseOut ,showButton = true}) => {
    return (
        <>
            {isOpen && (
                <Overlay onClose={onClose} onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
                    <div>
                        {showButton && (
                            <button 
                                className={style.closeModalButtom}
                                onClick={onClose}>
                                <GrClose size='30px' />
                            </button>
                        )}
                        {children} 
                    </div>
                </Overlay>
            )}
        </>
    );
};
