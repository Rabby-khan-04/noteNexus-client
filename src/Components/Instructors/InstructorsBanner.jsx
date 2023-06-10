import React from "react";
import bannerBg from "../../assets/Images/Instructors/banner_bg.jpg";
import bannerImg from "../../assets/Images/Instructors/banner_img.jpg";

const InstructorsBanner = () => {
  return (
    <section
      style={{
        background: `url("${bannerBg}"), #00000080`,
        backgroundBlendMode: "multiply",
      }}
      className="py-20"
    >
      <div className="container">
        <div className="grid grid-cols-2 max-w-7xl gap-5 mx-auto">
          <div className="text-neutral self-center ">
            <h4 className="text-3xl text-white font-extrabold mb-1">
              Our Instructors
            </h4>
            <h2 className="text-4xl font-extrabold text-primary mb-4">
              Meet Our Talented Instructors: Guiding Your Musical Journey
            </h2>
            <p className="text-lg text-white">
              Get to know the incredible individuals who make up our esteemed
              team of music instructors. With a deep passion for teaching and
              extensive expertise in their respective fields, our instructors
              are dedicated to nurturing your musical talents and helping you
              reach your full potential. Each instructor brings a unique set of
              skills, experiences, and teaching approaches to create a dynamic
              and enriching learning environment. From accomplished performers
              to patient mentors, our instructors are committed to supporting
              you on your musical journey.{" "}
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

export default InstructorsBanner;
