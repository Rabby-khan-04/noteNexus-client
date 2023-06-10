import React, { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import PopularClassCard from "./PopularClassCard";
import axios from "axios";
import { Link } from "react-router-dom";

const PopularClasses = () => {
  const [popularClass, setPopularClass] = useState([]);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BASE_URL}/all-classes`).then((res) => {
      setPopularClass(res.data);
    });
  }, []);

  return (
    <section className="py-16">
      <div className="container">
        <SectionTitle
          subTitle="Our Classes"
          title="Most popular classes"
          description="Discover our star-studded selection of most popular classes. Unleash your musical potential with these highly sought-after courses that have captivated students worldwide. From guitar mastery to enchanting violin techniques, these classes offer a gateway to musical excellence. Join our most popular classes today and elevate your skills under the guidance of our renowned instructors. Don't miss out on these acclaimed favorites that have garnered rave reviews and transformed aspiring musicians into true virtuosos."
        />
        <div className="grid grid-cols-3 gap-6 max-w-7xl mx-auto mt-12">
          {popularClass.map((item) => (
            <PopularClassCard key={item._id} item={item} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/classes"
            className="btn btn-secondary text-xl font-nunito text-white"
          >
            View All
          </Link>
        </div>
      </div>
    </section>
  );
};

export default PopularClasses;
