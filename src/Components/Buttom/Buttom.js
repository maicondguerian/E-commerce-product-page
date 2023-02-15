import style from './Buttom.module.css'

const CustomButtom = ({ nameButtom='custom Buttom' , customStyle , Icon, IconCustom, iconSize=20, onClick = () => {} })=>{
    let buttonClass = customStyle ? customStyle :  style;
    // let buttonClass = customStyle || style['customButtom'];
    
    

    return (
        <>
            <button type="" className={buttonClass} onClick={onClick} >
                {nameButtom ? nameButtom : <></>}
                {IconCustom ? <IconCustom/> : <></>}
                {Icon ? Icon : <></>}
            </button>
        </>
    )
}
export default CustomButtom