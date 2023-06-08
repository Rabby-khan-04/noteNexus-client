import React, { useRef, useState } from "react";
import slider1 from "../../../assets/Images/Home/Slider/slider-1.jpg";
import slider2 from "../../../assets/Images/Home/Slider/slider-2.jpg";
import slider3 from "../../../assets/Images/Home/Slider/slider-3.jpg";
import slider4 from "../../../assets/Images/Home/Slider/slider-4.jpg";
import slider5 from "../../../assets/Images/Home/Slider/slider-5.jpg";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import Slide from "./Slide";

const Slider = () => {
  const slideData = [
    {
      image: slider1,
      title: "Welcome to Our Website",
      description:
        "Discover our range of products and services designed to meet your needs. Explore our website and find out more about what we have to offer.",
    },
    {
      image: slider2,
      title: "Experience Quality and Innovation",
      description:
        "With a commitment to excellence, we deliver cutting-edge solutions and products that exceed expectations. Discover how our expertise can transform your experience.",
    },
    {
      image: slider3,
      title: "Unleash Your Creativity",
      description:
        "Unlock your creative potential with our innovative tools and resources. Whether you're a professional or a hobbyist, our products empower you to bring your ideas to life.",
    },
    {
      image: slider4,
      title: "Discover Endless Possibilities",
      description:
        "Unlock your creative potential with our innovative tools and resources. Whether you're a professional or a hobbyist, our products empower you to bring your ideas to life.",
    },
    {
      image: slider5,
      title: "Fuel Your Adventures",
      description:
        "Gear up for your next adventure with our high-quality outdoor equipment and accessories. From hiking to camping, we have the essentials to fuel your passion for exploration.",
    },
  ];

  return (
    <Carousel autoPlay={true} infiniteLoop={true} showStatus={false}>
      {slideData.map((item, index) => (
        <Slide key={index} item={item} />
      ))}
    </Carousel>
  );
};

export default Slider;
