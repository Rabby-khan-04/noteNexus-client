import React, { useContext } from "react";
import drum from "../../../assets/Images/Home/sub-banner-01.png";
import { ThemeContext } from "../../../Providers/ThemeProvider";

const DrumSection = () => {
  const { darkMode } = useContext(ThemeContext);
  return (
    <section className={`${darkMode ? "bg-[#151515]" : "bg-white"} py-16`}>
      <div className="container grid grid-cols-2 gap-10">
        <div>
          <img src={drum} className="w-full" alt="" />
        </div>
        <div className="self-center">
          <h2
            className={`${
              darkMode ? "text-primary" : "text-accent"
            } font-luckiest text-6xl mb-4`}
          >
            Music brings harmony to the world.
          </h2>
          <p className={`${darkMode ? "text-white" : "text-accent"} text-xl`}>
            At{" "}
            <span className={`${darkMode ? "text-primary" : "text-secondary"}`}>
              Note Nexus
            </span>
            , we believe in the transformative power of music. We are a
            passionate community of musicians, educators, and enthusiasts
            dedicated to inspiring and empowering individuals on their musical
            journeys. Through exceptional classes, expert instructors, and a
            nurturing environment, we provide the resources and support needed
            to unlock your musical potential. Join us and discover the joy,
            fulfillment, and universal language of music. Together, let's create
            harmony in our world.
          </p>
        </div>
      </div>
    </section>
  );
};

export default DrumSection;
