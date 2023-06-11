import React, { useContext, useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import PopularClassCard from "./PopularClassCard";
import axios from "axios";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../../Providers/ThemeProvider";

const PopularClasses = () => {
  const [popularClass, setPopularClass] = useState([]);
  const { darkMode } = useContext(ThemeContext);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/all-classes?limit=6`)
      .then((res) => {
        setPopularClass(res.data);
      });
  }, []);

  return (
    <section
      className={`md:py-16 py-10 ${darkMode ? "text-white bg-[#13111f]" : ""}`}
    >
      <div className="container">
        <SectionTitle
          subTitle="Our Classes"
          title="Most popular classes"
          description="Discover our star-studded selection of most popular classes. Unleash your musical potential with these highly sought-after courses that have captivated students worldwide. From guitar mastery to enchanting violin techniques, these classes offer a gateway to musical excellence. Join our most popular classes today and elevate your skills under the guidance of our renowned instructors. Don't miss out on these acclaimed favorites that have garnered rave reviews and transformed aspiring musicians into true virtuosos."
        />
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto mt-12">
          {popularClass.map((item) => (
            <PopularClassCard key={item._id} item={item} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/classes"
            className={`btn text-xl font-nunito ${
              darkMode ? "btn-primary text-black" : "text-white btn-secondary "
            }`}
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularClasses;
