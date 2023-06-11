import React from "react";
import Title from "../../Components/Shared/Title/Title";
import Slider from "../../Components/Home/Slider/Slider";
import PopularClasses from "../../Components/Home/PopularClasses/PopularClasses";
import PopularInstructors from "../../Components/Home/PopularInstructors/PopularInstructors";
import DrumSection from "../../Components/Home/DrumSection/DrumSection";

const Home = () => {
  return (
    <>
      <Title title="Home" />
      <section>
        <Slider />
      </section>
      <PopularClasses />
      <DrumSection />
      <PopularInstructors />
    </>
  );
};

export default Home;
