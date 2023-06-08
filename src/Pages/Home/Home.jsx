import React from "react";
import Title from "../../Components/Shared/Title/Title";
import Slider from "../../Components/Home/Slider/Slider";

const Home = () => {
  return (
    <>
      <Title title="Home" />
      <section>
        <Slider />
      </section>
    </>
  );
};

export default Home;
