import React from "react";
import Slider from "react-slick";
import banner1 from "../../assets/images/banners/banner1.jpg";
import banner2 from "../../assets/images/banners/banner2.jpg";
import banner3 from "../../assets/images/banners/banner3.jpg";
import banner4 from "../../assets/images/banners/banner4.jpg"
import banner5 from "../../assets/images/banners/banner5.jpg"
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
      label: "image3",
    },
  {
      photo: banner4,
      label: "image4",
    },
    {
      photo: banner5,
      label: "image5",
    },
  ];

  const settingsBanner = {
    dots: false,
    infinite: true,
    speed: 3000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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
              height: "350px",
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
