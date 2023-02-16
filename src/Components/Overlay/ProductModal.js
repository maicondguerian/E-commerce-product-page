import { Children } from 'react'
import style from './ProductModal.module.css'
import { GrClose } from "react-icons/gr";

export const ProductModal = ({ isOpen = false ,onClose ,children, size }) => {


    return (
        <>
            {isOpen && (
                <div className={style.overlay} onClick={onClose}>
                    {children}
                    <button className={style.closeModalButtom} onClick={onClose} > <GrClose size='30px' /> </button>
                </div>
            )}
        </>
    )

}
