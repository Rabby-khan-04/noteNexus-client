import React from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import PopularClassCard from "./PopularClassCard";
import { usePopularClasses } from "../../../API/usePopularClasses";
import Spinner from "../../Spinner/Spinner";

const PopularClasses = () => {
  const [popularClass, isPopularClassLoading, popularClassesRefetch] =
    usePopularClasses();

  if (isPopularClassLoading) {
    return <Spinner />;
  }

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
      </div>
    </section>
  );
};

export default PopularClasses;
