import style from '../CarrouselThumbMail/carrouselThumbMail.module.css'
import React from "react";

const Card = ({ src }) =>{
    return(
        <>
        <div className={style.card}>
            <img src={src} />
            
        </div>
        
        
        </>
    )
}

export default Card;