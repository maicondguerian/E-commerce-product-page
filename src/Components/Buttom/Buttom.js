import style from './Buttom.module.css'

const CustomButtom = ({ nameButtom='custom Buttom' , customStyle , Icon , iconSize=20, onClick = () => {},props })=>{
    let buttonClass = customStyle ? customStyle : style;
    
    

    return (
        <>
            <button type="" className={buttonClass.customButtom} onClick={onClick} >
                {nameButtom ? nameButtom : <></>}
                {Icon ? Icon : <></>}
                {props}
            </button>
        </>
    )
}
export default CustomButtom