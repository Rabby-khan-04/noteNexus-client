import React from "react";
import { Link } from "react-router-dom";

const Slide = ({ item }) => {
  const { image, title, description } = item;
  return (
    <div
      className="h-[calc(100vh-72px)]"
      style={{
        background: `url('${image}'), #00000080`,
        backgroundBlendMode: "multiply",
      }}
    >
      <div className="container flex justify-center items-center h-full">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-primary text-6xl font-bold mb-5 font-luckiest">
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
