import Overlay from '../Overlay2/Overlay';
import styles from './SideCart.module.css';

const SideCart = ({ isOpen, onClose, children }) => {
  const handleOverlayClick = (event) => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return (
    <>
      {isOpen && (
        <Overlay onClick={handleOverlayClick}>
          <div className={styles.sideCart}>
            {children}
          </div>
        </Overlay>
      )}
    </>
  );
};

export default SideCart;
