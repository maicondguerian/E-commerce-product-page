import { useState } from "react";
import Carousel from "react-elastic-carousel";
import Card from "./Card";
import { ProductModal } from "../Overlay/ProductModal";
import style from '../CarrouselThumbMail/carrouselThumbMail.module.css';
import thumbnail1 from '../assets/image-product-1-thumbnail.jpg'
import thumbnail2 from '../assets/image-product-2-thumbnail.jpg'
import thumbnail3 from '../assets/image-product-3-thumbnail.jpg'
import thumbnail4 from '../assets/image-product-4-thumbnail.jpg'
import thumbnail5 from '../assets/image-product-4-thumbnail.jpg'
import thumbnail6 from '../assets/image-product-4-thumbnail.jpg'
import productFullSize1 from '../assets/image-product-1.jpg'
import productFullSize2 from '../assets/image-product-2.jpg'
import productFullSize3 from '../assets/image-product-3.jpg'
import productFullSize4 from '../assets/image-product-4.jpg'
import productFullSize5 from '../assets/image-product-4.jpg'
import productFullSize6 from '../assets/image-product-4.jpg'


function CarrouselThumbMail() {
  const images = [thumbnail1, thumbnail2, thumbnail3, thumbnail4, thumbnail5, thumbnail6];

  const breakPoints = [{ itemsToShow: 3, itemsToScroll: 6 }];

  const [list] = useState([1, 2, 3, 4, 5, 6]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [modal, setModal] = useState(false);

  const handleImageClick = (id) => {
    setSelectedImage(id);
    setModal(true);
  };

  const galleryData = [
    {
      id: 1,
      imgSrc: thumbnail1,
      imgSrc2: productFullSize1,
    },
    {
      id: 2,
      imgSrc: thumbnail2,
      imgSrc2: productFullSize2,
    },
    {
      id: 3,
      imgSrc: thumbnail3,
      imgSrc2: productFullSize3,
    },
    {
      id: 4,
      imgSrc: thumbnail4,
      imgSrc2: productFullSize4,
    },
    {
      id: 5,
      imgSrc: thumbnail5,
      imgSrc2: productFullSize5,
    },
    {
      id: 6,
      imgSrc: thumbnail6,
      imgSrc2: productFullSize6,
    },
  ];

  return (
    <div className={style.AppCarrouselMini}>
      <div className={style.carouselWrapper}>
        <ProductModal isOpen={modal} onClose={() => setModal(false)}>
          {selectedImage && (
            <img src={galleryData.find((img) => img.id === selectedImage)?.imgSrc2} alt="" />
          )}
        </ProductModal>
        <Carousel
          breakPoints={breakPoints}
          pagination={false}
          enableMouseSwipe={false}
          enableSwipe={true}
        >
          {list.map((item, index) => (
            <Card
              key={index}
              src={images[index]}
              onClick={() => handleImageClick(item)}
            />
          ))}
        </Carousel>
      </div>
    </div>
 

  );
}

export default CarrouselThumbMail;