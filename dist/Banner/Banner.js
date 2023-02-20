import React from "react";
import Slider from "react-slick";
import banner1 from "../../assets/images/banners/banner1.jpg";
import banner2 from "../../assets/images/banners/banner2.jpg";
import banner3 from "../../assets/images/banners/banner3.jpg";
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
    return (React.createElement(Slider, { ...settingsBanner }, imagesBanner.map((step) => (React.createElement("div", { key: step.label },
        React.createElement("img", { src: step.photo, alt: step.label, style: {
                borderRadius: "0px",
                height: "300px",
                display: "block",
                overflow: "hidden",
                width: "100%",
            } }))))));
};
export default Banner;
