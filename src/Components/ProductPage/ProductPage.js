import React, {  useState } from 'react'
import style from './ProductPage.module.css'
import userAatar from '../assets/image-avatar.png'
import snickers from '../assets/image-product-1.jpg'
import CustomButtom from '../Buttom/Buttom'
import { FaMinus, FaPlus, } from "react-icons/fa";
import CarrouselThumbNail from '../CarrouselThumbNail/carrouselThumbNail'
import { GrCart } from "react-icons/gr";
import SideCart from '../SideBar/SideCart'

export default function ProductPage() {
    const cartIcon = <svg width="22" height="20" fill="#FFF" fillRule="nonzero"></svg>

    const logoSvg =  <svg width="138" height="20"></svg>

    const [counter, setCounter] = useState(0);

    let increment = () => {
        setCounter(counter + 1)

    }

    let decrement = () => {
        if (counter > 0) {
            setCounter(counter - 1);
        }
    };

    const product = {
        id: 1,
        quantity: 0,
        brand: 'Sneaker company',
        name: 'Fall Limited Edition Sneakers',
        price: 12500,
        lastPrice: 250,
        discount: 50,
        description: 'Fall Limited These low-profile sneakers are your perfect casual wear comparison. Featuring a durable rubber outer sole, they\'ll withstand everything the weather can offer.'
    };

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD',
    });

    const [productCart, setProductCart] = useState([]);

    function handleaddToCart() {
        const productIndex = productCart.findIndex(p => p.id === product.id);

        if (productIndex >= 0) {
            const updatedProductCart = [...productCart];
            updatedProductCart[productIndex] = {
                ...updatedProductCart[productIndex],
                quantity: updatedProductCart[productIndex].quantity + counter
            };
            setProductCart(updatedProductCart);
        } else {
            setProductCart([
                ...productCart,
                {
                    ...product,
                    quantity: counter
                }
            ]);
        }

        setCounter(0);
    }

    const cartQuantity = productCart.reduce((total, item) => total + item.quantity, 0)

    const [SideBar, setSideBar] = useState(false)

    const handleOpenSideBar = () => {
        setSideBar(true)
    }

    const handleCloseSideBar = () => {
        setSideBar(false)
    }

    return (
        <>
            <SideCart  isOpen={SideBar} onClose={handleCloseSideBar}>
                <p>test children</p>
            </SideCart>
            <div className={style.wrapperContainer}>
                <div className={style.TopMenuBar}>
                    <ul className={style.menuList}>
                        <li className={style.logo}> {logoSvg} </li>
                        <li> Collections</li>
                        <li> Man</li>

                        <li> Woman</li>
                        <li> About</li>
                        <li> Contact</li>
                    </ul>
                    <ul className={style.cart}>
                        <li>
                            <span className={style.badgeWrapper} onClick={handleOpenSideBar}>
                                <GrCart size={30} />
                                <span className={style.cartBadge}> {cartQuantity} </span>
                            </span>
                        </li>
                        <li>
                            <img className={style.avatar} src={userAatar} alt="image-avatar" />
                        </li>
                    </ul>
                </div>
                <div className={style.hr}>
                    <hr />
                </div>
                <div className={style.contentWrapper}>
                    <div className={style.productThumb}>
                        <img className={style.snickers} src={snickers} alt="image-product-snickers" />
                        <div className={style.iconPhotos}>
                            <CarrouselThumbNail />
                        </div>
                    </div>
                    <div className={style.productInfo}>
                        <div className={style.productDescriptionWrapper}>
                            <h5 className={style.company}> {product.brand} </h5>
                            <h1 className={style.title}> {product.name} </h1>
                            <p className={style.description}> {product.description} </p>
                            <span className={style.priceWrapper}>
                                <h2 className={style.price}> {formatter.format(product.price)} </h2>
                                <h3 className={style.descount}> {`${product.discount}%`} </h3>
                            </span>
                            <s className={style.lastPrice}> {formatter.format(product.lastPrice)} </s>
                            <div className={style.ButtomWrapper}>
                                <div className={style.counterWrapper}>
                                    <CustomButtom IconCustom={FaMinus} nameButtom='' customStyle={style.customStyle} onClick={decrement} />
                                    <span className={style.counterValue}><h3> {counter} </h3></span>
                                    <CustomButtom IconCustom={FaPlus} nameButtom='' customStyle={style.customRightButtom} onClick={increment} />
                                </div>
                                <CustomButtom customStyle={style.customButtom} Icon={cartIcon} nameButtom='Add to cart' onClick={handleaddToCart} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}

