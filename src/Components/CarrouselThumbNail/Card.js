import style from '../CarrouselThumbNail/carrouselThumbNail.module.css'

const Card = ({ src , onClick = () =>{}, }) =>{

    return(
        <>
            <div className={style.card} onClick={onClick}>
                <img src={src} />
                
            </div>
        </>
    )
}

export default Card;