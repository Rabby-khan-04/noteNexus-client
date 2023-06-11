import React from "react";
import { Link } from "react-router-dom";

const Slide = ({ item }) => {
  const { image, title, description } = item;
  return (
    <div
      className="h-[500px] lg:h-[600px] xl:h-[800px] 2xl:h-[calc(100vh-72px)]"
      style={{
        background: `url('${image}'), #00000080`,
        backgroundBlendMode: "multiply",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="container flex justify-center items-center h-full">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-primary md:text-6xl text-4xl sm:text-3xls font-bold mb-5 font-luckiest">
            {title}
          </h2>
          <p className="text-xl text-white font-semibold font-nunito mb-5">
            {description}
          </p>
          <Link
            to="/classes"
            className="btn btn-secondary text-xl font-nunito text-white"
          >
            View Class
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Slide;
