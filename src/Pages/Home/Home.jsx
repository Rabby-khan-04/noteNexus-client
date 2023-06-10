import React from "react";
import Title from "../../Components/Shared/Title/Title";
import Slider from "../../Components/Home/Slider/Slider";
import PopularClasses from "../../Components/Home/PopularClasses/PopularClasses";
import PopularInstructors from "../../Components/Home/PopularInstructors/PopularInstructors";

const Home = () => {
  return (
    <>
      <Title title="Home" />
      <section>
        <Slider />
      </section>
      <PopularClasses />
      <PopularInstructors />
    </>
  );
};

export default Home;
