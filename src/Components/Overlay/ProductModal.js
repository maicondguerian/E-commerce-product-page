import style from './ProductModal.module.css';
import { GrClose } from "react-icons/gr";
import Overlay from '../Overlay2/Overlay';


export const ProductModal = ({ isOpen, onClose, children, onClick }) => {
    return (
        <>
            {isOpen && (
                <Overlay onClick={onClose}>
                    <div className={style.fullImageWrapper}>
                        <button
                            className={style.closeModalButtom}
                            onClick={onClose}>
                            <GrClose size='30px' />
                        </button>
                        {children}
                    </div>
                </Overlay>
            )}
        </>
    );
};
