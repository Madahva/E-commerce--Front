import React from "react";
import Slider from "react-slick";

const Banner = () => {
  const imagesBanner = [
    {
      photo: "https://http2.mlstatic.com/D_NQ_756410-MLA53861274214_022023-OO.webp",
      label: "image1",
    },
    {
      photo: "https://http2.mlstatic.com/D_NQ_756410-MLA53861274214_022023-OO.webp",
      label: "image2",
    },
    {
      photo: "https://http2.mlstatic.com/D_NQ_756410-MLA53861274214_022023-OO.webp",
      label: "image2",
    },
  ];

  const settingsBanner = {
    dots: true,
    infinite: true,
    speed: 750,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    slickNext: true,
    slickPrevious: true,
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
