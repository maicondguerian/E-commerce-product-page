import { Children } from 'react'
import style from './ProductModal.module.css'

export const ProductModal = ({ isOpen = false ,onClose ,children}) => {

    return (
        <>
            {isOpen && (
                <div className={style.overlay} onClick={onClose}>
                    {children}
                </div>
            )}
        </>
    )

}
