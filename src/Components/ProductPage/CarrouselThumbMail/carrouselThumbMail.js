import { useState } from "react";
import Carousel from "react-elastic-carousel";
import style from '../CarrouselThumbMail/carrouselThumbMail.module.css'
import image1 from '../assets/image-product-1-thumbnail.jpg'
import image2 from '../assets/image-product-2-thumbnail.jpg'
import image3 from '../assets/image-product-3-thumbnail.jpg'
import image4 from '../assets/image-product-4-thumbnail.jpg'
import image5 from '../assets/image-product-4-thumbnail.jpg'
import Card from "./Card";

function CarrouselThumbMail() {
  const images = [image1, image2, image3, image4, image5];

  const breakPoints = [{ itemsToShow: 3, itemsToScroll: 5 }];

  const [list] = useState([1, 2, 3, 4, 5]);

  return (
    <div className={style.AppCarrouselMini}>
      <div className={style.carouselWrapper}>
        <Carousel
          breakPoints={breakPoints}
          showArrows={true}
          pagination={false}
          enableAutoPlay={true}
          autoPlayInterval={3000}
          autoTabIndexVisibleItems={true}>
          {list.map((item, index) => (
            <Card src={images[index]} />
          ))}
        </Carousel>
      </div>
    </div>
  )
}

export default CarrouselThumbMail;