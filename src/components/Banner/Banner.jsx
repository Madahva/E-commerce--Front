import React from "react";
import Slider from "react-slick";
import banner1 from "../../assets/banners/banner1.jpg";
import banner2 from "../../assets/banners/banner2.jpg";
import banner3 from "../../assets/banners/banner3.jpg";

const Banner = () => {
  const imagesBanner = [
    {
      photo: banner1,
      label: "image1",
    },
    {
      photo: banner2,
      label: "image2",
    },
    {
      photo: banner3,
      label: "image2",
    },
  ];

  const settingsBanner = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    slickNext: false,
    slickPrevious: false,
    swipe: true,
  };
  return (
    <Slider {...settingsBanner}>
      {imagesBanner.map((step) => (
        <div key={step.label}>
          <img
            src={step.photo}
            alt={step.label}
            style={{
              borderRadius: "0px",
              height: "300px",
              display: "block",
              overflow: "hidden",
              width: "100%",
            }}
          />
        </div>
      ))}
    </Slider>
  );
};

export default Banner;
