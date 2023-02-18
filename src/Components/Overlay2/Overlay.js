
import React from 'react';
import style from './Overlay.module.css';
import { GrClose } from "react-icons/gr";

const Overlay = function ({ children, onClose, onClick }) {
  return (
    <div className={style.overlay} onClick={onClick} onClose={onClose}>
      {children}
    </div>
  );
}

export default Overlay;
