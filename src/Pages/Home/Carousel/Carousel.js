import React from "react";
import Img1 from "../Carousel/carousel-images/First.jpg";
import Img2 from "../Carousel/carousel-images/Two.jpg";
import Img3 from "../Carousel/carousel-images/Third.jpg";
import Img4 from "../Carousel/carousel-images/Fourth.jpg";

const Carousel = () => {
  return (
    <div className="carousel w-3/4  mx-auto my-5 rounded-lg">
      <div id="slide1" className="carousel-item relative w-full ">
        <div className="img-gradient w-full">
          <img src={Img1} alt="" className="w-full " />
        </div>
        <div className="absolute  text-left text-white bottom-10 md:bottom-20 right-10">
          <p className="md:text-5xl font-semibold ">Smile Everyday!</p>
          <p>Smile Brings confidence.</p>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide4" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide2" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full ">
        <div className="img-gradient w-full">
          <img src={Img2} alt="" className="w-full " />
        </div>
        <div className="absolute  text-left text-black bottom-10 md:bottom-20 right-10">
          <p className="md:text-5xl font-semibold ">Take Care!</p>
          <p>Teeth is so rare.</p>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide1" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide3" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full ">
        <div className="img-gradient w-full">
          <img src={Img3} alt="" className="w-full " />
        </div>
        <div className="absolute  text-left text-white bottom-10 md:bottom-20 right-10">
          <p className="md:text-5xl font-semibold ">
            We are here for your Teeth!
          </p>
          <p>Teeth is so important.</p>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide2" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide4" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full ">
        <div className="img-gradient w-full">
          <img src={Img4} alt="" className="w-full " />
        </div>
        <div className="absolute  text-left text-white bottom-10 md:bottom-20 right-10">
          <p className="md:text-5xl font-semibold ">Brush Teeth Everyday!</p>
          <p>Smiling face gives us courage.</p>
        </div>
        <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a href="#slide3" className="btn btn-circle">
            ❮
          </a>
          <a href="#slide1" className="btn btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Carousel;
