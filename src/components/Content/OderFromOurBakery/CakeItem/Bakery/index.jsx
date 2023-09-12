import React, { useContext, useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import './Bakery.css'
import Ads from '../../../../Ads';
import { CartContext } from '../../../../../context/CartApp';
function Bakery(props) {
  const { listCake} = props
  const {setCart} = useContext(CartContext)
  const location = useLocation();
  const [data, setData] = useState({});

  useEffect(() => {

    const bakeryId = location.state
    const filterData = listCake.filter((cake) => {
      return cake.id === bakeryId;
    });
    setData(filterData[0]);

  }, [location])


    const addToCart = (id,active,quantity,price) => {
      // setCakeInCart((prev) => {
        // const newArr = [...prev, data];
        // return newArr;
      // })
  
      setCart(id,active,quantity,price)
    }

  const [images, setImages] = useState([]);

  useEffect(() => {
    console.log(data)
    setImages([data.image, data.image1, data.image2, data.image3]);
  }, [data])

  function imageSlider(parent, images) {
    let currentImage = 0;
    let slider = {
      parent: parent,
      images: parent.querySelector(".images"),
      thumbnails: parent.querySelector(".thumbnails"),
      backBtn: parent.querySelector(".back-btn"),
      nextBtn: parent.querySelector(".next-btn")
    };

    slider.images.innerHTML = images.map(function (image) {
      return `<img src="${image}"/>`
    }).join("");

    let imageNodes = slider.images.querySelectorAll("img");
    imageNodes[currentImage]?.classList?.add("active");

    slider.thumbnails.innerHTML = slider.images.innerHTML;

    let thumbnailNodes = slider.thumbnails.querySelectorAll("img");

    thumbnailNodes[currentImage].classList.add("active");
    for (let i = 0; i < thumbnailNodes.length; i++) {
      thumbnailNodes[i].addEventListener("click", function () {
        slider.thumbnails.querySelector("img.active").classList.remove("active");
        thumbnailNodes[i].classList.add("active");
        imageNodes[currentImage].classList.remove("active");
        currentImage = i;
        imageNodes[currentImage].classList.add("active");
      });
    }

    slider.backBtn.addEventListener("click", function () {
      imageNodes[currentImage].classList.remove("active");
      currentImage--;
      if (currentImage < 0) {
        currentImage = images.length - 1;
      }
      imageNodes[currentImage].classList.add("active");
      slider.thumbnails.querySelector("img.active").classList.remove("active");
      thumbnailNodes[currentImage].classList.add("active");
    });

    slider.nextBtn.addEventListener("click", function () {
      imageNodes[currentImage].classList.remove("active");
      currentImage = (currentImage + 1) % images.length;
      imageNodes[currentImage].classList.add("active");
      slider.thumbnails.querySelector("img.active").classList.remove("active");
      thumbnailNodes[currentImage].classList.add("active");
    });
  }

  useEffect(() => {
    if (!images[0]) {
      return;
    }
    imageSlider(document.querySelector(".image-slider"), images);
  }, [images])

  const [priceOp,setPriceOp] = useState(0);

  const [active,setActive] = useState(0);

  const addClickOption = (price,index) => {
    setPriceOp(data.price + price);
    setActive(index)
  }
  useEffect(() => {
    setPriceOp(data.price)
  },[data])

  


  return (
    <div>
      {
        data === undefined ? <h1>Loading...</h1>
          :
          <div className='containerBakery'>
            <div className='containerLeft'>
              <div className='nameBakery'><h1>{data.name}</h1>
                <p>${priceOp}.00</p>
                <hr></hr>
              </div>

              <div className='cakeSize'>
                <h3>Cake Size</h3>
               {console.log(data.option)}
               { 
                data?.option?.map((op,index) => (
                  <button className={active===index?'active':''} onClick={()=>{addClickOption(op.priceOp,index)}} >{op.cakeSize}</button>
                ))
               }
              </div>
              <div className='addToCartBtn'>
                <button onClick={() => addToCart(data.id,active,1,priceOp)} >
                  {data.isSoldOut === false ? ' Add to cart' : 'Sold Out'}
                </button>
                <div className='inf'><p>{data.inf}</p></div>
              </div>
            </div>
            <div className='containerRight image-slider'>
              <div className='images'></div>
              <div className='thumbnails'></div>
              <div className='back-btn'>
                <ion-icon name="chevron-back-outline">  ◁ </ion-icon>
              </div>
              <div className='next-btn'>
                <ion-icon name='chevron-forward-outline'> ▷ </ion-icon>
              </div>
            </div>
          </div>
      }
      <Ads />
    </div>
  )
}

export default Bakery