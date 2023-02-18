import Overlay from '../Overlay/Overlay';
import styles from './SideCart.module.css';

const SideCart = ({ isOpen, onClose, productCart }) => {
  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };
  const PriceTotal = ({ quantity, price }) => {
    const total = quantity * price;
    return <span>{total.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</span>;
  }

  const CartItem = ({ name, price, quantity }) => {
    return (
      <div className={styles.cartItem}>
        <div className={styles.itemName}>Product: {name}</div>
        <div className={styles.itemQuantity}>Quantity: {quantity}</div>
        <div className={styles.itemPrice}>Price: {price.toLocaleString('en-US', { style: 'currency', currency: 'USD' })}</div>
        <div>Total: {PriceTotal({ quantity, price })}</div>
      </div>
    );
  };
  return (
    <>
      {isOpen && (
        <Overlay onClick={handleOverlayClick}>
          <div className={styles.sideCart} onClick={(e) => e.stopPropagation()}>
            <div className={styles.cartItems}>
              {productCart.map((item) => (
                <CartItem
                  key={item.id}
                  name={item.name}
                  price={item.price}
                  quantity={item.quantity}
                />
              ))}
            </div>
          </div>
        </Overlay>
      )}
    </>
  );
};

export default SideCart;
