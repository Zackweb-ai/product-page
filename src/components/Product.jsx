import React, { useState } from "react";
import { useCart} from '../CartContext';
import img1 from "../resources/images/image-product-1.jpg";
import img2 from "../resources/images/image-product-2.jpg";
import img3 from "../resources/images/image-product-3.jpg";
import img4 from "../resources/images/image-product-4.jpg";
import thumb1 from "../resources/images/image-product-1-thumbnail.jpg";
import thumb2 from "../resources/images/image-product-2-thumbnail.jpg";
import thumb3 from "../resources/images/image-product-3-thumbnail.jpg";
import thumb4 from "../resources/images/image-product-4-thumbnail.jpg";
import cart from "../resources/images/icon-cart.svg";
import add from "../resources/images/icon-plus.svg";
import minus from "../resources/images/icon-minus.svg";
import next from "../resources/images/icon-next.svg";
import prev from "../resources/images/icon-previous.svg";


export const Product = () => {
  const { addToCart  } = useCart();
  const { counter, setCounter } = useCart();
  const [images, setImage] = useState({
    image1: img1,
    image2: img2,
    image3: img3,
    image4: img4,
  });

  const [selectedThumbnail, setSelectedThumbnail] = useState("image1");

  const handleThumbnailClick = (imageKey) => {
    setSelectedThumbnail(imageKey);
  };
  const product = [
    {
      name: "SNEAKER COMPANY",
      title: "Fall Limited Edition Sneakers",
      price: 125,
      description:
        "These low-profile sneakers are your perfect casual wear companion.Featuring a durable rubber outer sole, they’ll withstand everythingthe weather can offer",
      originalPrice: "$250.00",
      percentage: "50%",
      image: img1,
    },
  ];
  const thumbnails = [
    { key: "image1", src: thumb1 },
    { key: "image2", src: thumb2 },
    { key: "image3", src: thumb3 },
    { key: "image4", src: thumb4 },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const handleNextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % Images.length);
  };

  const handlePrevImage = () => {
    setCurrentImage((prevImage) =>
      prevImage === 0 ? Images.length - 1 : prevImage - 1
    );
  };
  const Images = [
    img1, img2, img3, img4
  ];

  return (
    <div className="product">
      {console.log(Images.length)}
      <div className="img">
        <div className="main">
          <img
            className="img-main"
            src={images[selectedThumbnail]}
            alt="main"
          />
        </div>
        <div className="sub-img">
          {thumbnails.map((thumbnail) => (
            <div className="position click " key={thumbnail.key}>
              {selectedThumbnail === thumbnail.key && (
                <div className="overlay selected"></div>
              )}
              <img
                className={`thumb`}
                src={thumbnail.src}
                alt="thumbnail"
                onClick={() => handleThumbnailClick(thumbnail.key)}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="slider">
        <img src={Images[currentImage]} alt="main-mobile" />
        <img className="arrow arrow-left" src={prev} alt="" onClick={handlePrevImage}/>
        <img className="arrow arrow-right" src={next} alt="" onClick={handleNextImage} />
      </div>
      <div className="info">
        <div className="name"> {product[0].name}</div>
        <div className="flex">
        <div className="title">{product[0].title}</div>
        <div className="description">{product[0].description}</div>
        </div>
        <div className="price-container">
          <div className="actual-price">
            <span className="price">${product[0].price}.00</span>
            <span className="original-price">{product[0].originalPrice}</span>
          </div>
          <div className="discount"> {product[0].percentage}</div>
        </div>
        <div className="btn">
          <div className="counter">
            <img
              src={minus}
              alt="add"
              onClick={() => {
                if (counter > 1) {
                  setCounter((prev) => prev - 1);
                }
              }}
            />
            <span>{counter}</span>
            <img
              src={add}
              alt="remove"
              onClick={() => {
                setCounter((prev) => prev + 1);
              }}
            />
          </div>
          <button className="add" onClick={() => addToCart(product)}>
            <img color="white" src={cart} alt="cart" className="cart-color" />{" "}
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};
