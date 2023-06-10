import React from "react";
import bannerBg from "../../assets/Images/Classes/banner.jpg";
import bannerImg from "../../assets/Images/Classes/family.jpg";
import "./ClassBanner.css";

const ClassesBanner = () => {
  return (
    <section
      style={{ backgroundImage: `url("${bannerBg}")` }}
      className="py-20"
    >
      <div className="container">
        <div className="grid grid-cols-2 max-w-7xl mx-auto">
          <div className="text-neutral self-center ">
            <h4 className="text-3xl text-white font-extrabold mb-1">
              Our Classes
            </h4>
            <h2 className="text-4xl font-extrabold text-primary mb-4">
              Unlock Your Musical Journey
            </h2>
            <p className="text-lg text-white">
              Immerse yourself in a world of musical exploration with our
              diverse range of classes. From guitar and piano to vocals and
              winds, our expert-led courses cater to all levels and musical
              interests. Join us as we guide you on an inspiring journey of
              musical growth, providing comprehensive instruction, personalized
              guidance, and a supportive learning environment. Whether you're a
              beginner or an experienced musician, our classes are designed to
              unlock your true potential and ignite your passion for music.
              Explore our classes today and embark on a transformative musical
              adventure.
            </p>
          </div>
          <div className="text-center">
            <img
              src={bannerImg}
              className="inline-block rounded-2xl banner__img"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClassesBanner;
