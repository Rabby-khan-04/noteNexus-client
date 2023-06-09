import React from "react";
import Title from "../../Components/Shared/Title/Title";
import Slider from "../../Components/Home/Slider/Slider";
import PopularClasses from "../../Components/Home/PopularClasses/PopularClasses";

const Home = () => {
  return (
    <>
      <Title title="Home" />
      <section>
        <Slider />
      </section>
      <PopularClasses />
    </>
  );
};

export default Home;
