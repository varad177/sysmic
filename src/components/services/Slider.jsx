import React from "react";
import "./services.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const Slider = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      partialVisibilityGutter: 40
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      partialVisibilityGutter: 30
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      partialVisibilityGutter: 20
    },
  };

  return (
    <Carousel
      className="slider"
      responsive={responsive}
      dotListClass="custom-dot-list-style"
      itemClass="carousel-item-padding-40-px"
      containerClass="carousel-container"
      swipeable={false}
      draggable={false}
      // infinite={true}
      // autoPlay={true}
      autoPlaySpeed={2000}
      slidesToSlide={1}
    >
      <div className="serviceBox">
        <div className="slidericon">
        <i class="fa-solid fa-building"></i>
        </div>
        <div className="sliderLargrPara">
          <p>Company Incorporation</p>
        </div>
        <div className="SliderSmallPara">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            cupiditate quo ipsam numquam impedit nesciunt dignissimos nemo
            explicabo autem, ex iusto architecto neque quam at voluptas sed a
            tempore nobis ad tm.
          </p>
        </div>
        <div className="slider_yellow_para">
          <p>Starting from S$790</p>
        </div>
      </div>
      <div className="serviceBox">
        <div className="slidericon">
        <i class="fa-solid fa-building"></i>
        </div>
        <div className="sliderLargrPara">
          <p>Company Incorporation</p>
        </div>
        <div className="SliderSmallPara">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            cupiditate quo ipsam numquam impedit nesciunt dignissimos nemo
            explicabo autem, ex iusto architecto neque quam at voluptas sed a
            tempore nobis ad tm.
          </p>
        </div>
        <div className="slider_yellow_para">
          <p>Starting from S$790</p>
        </div>
      </div>
      <div className="serviceBox">
        <div className="slidericon">
        <i class="fa-solid fa-building"></i>
        </div>
        <div className="sliderLargrPara">
          <p>Company Incorporation</p>
        </div>
        <div className="SliderSmallPara">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            cupiditate quo ipsam numquam impedit nesciunt dignissimos nemo
            explicabo autem, ex iusto architecto neque quam at voluptas sed a
            tempore nobis ad tm.
          </p>
        </div>
        <div className="slider_yellow_para">
          <p>Starting from S$790</p>
        </div>
      </div>
      <div className="serviceBox">
        <div className="slidericon">
        <i class="fa-solid fa-building"></i>
        </div>
        <div className="sliderLargrPara">
          <p>Company Incorporation</p>
        </div>
        <div className="SliderSmallPara">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            cupiditate quo ipsam numquam impedit nesciunt dignissimos nemo
            explicabo autem, ex iusto architecto neque quam at voluptas sed a
            tempore nobis ad tm.
          </p>
        </div>
        <div className="slider_yellow_para">
          <p>Starting from S$790</p>
        </div>
      </div>
      <div className="serviceBox">
        <div className="slidericon">
        <i class="fa-solid fa-building"></i>
        </div>
        <div className="sliderLargrPara">
          <p>Company Incorporation</p>
        </div>
        <div className="SliderSmallPara">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            cupiditate quo ipsam numquam impedit nesciunt dignissimos nemo
            explicabo autem, ex iusto architecto neque quam at voluptas sed a
            tempore nobis ad tm.
          </p>
        </div>
        <div className="slider_yellow_para">
          <p>Starting from S$790</p>
        </div>
      </div>
      <div className="serviceBox">
        <div className="slidericon">
        <i class="fa-solid fa-building"></i>
        </div>
        <div className="sliderLargrPara">
          <p>Company Incorporation</p>
        </div>
        <div className="SliderSmallPara">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere
            cupiditate quo ipsam numquam impedit nesciunt dignissimos nemo
            explicabo autem, ex iusto architecto neque quam at voluptas sed a
            tempore nobis ad tm.
          </p>
        </div>
        <div className="slider_yellow_para">
          <p>Starting from S$790</p>
        </div>
      </div>
     
    </Carousel>
  );
};

export default Slider;
