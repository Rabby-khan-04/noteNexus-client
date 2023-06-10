import React, { useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import axios from "axios";

const PopularInstructors = () => {
  const [instructors, setInstructors] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/instructors?limit=8`)
      .then((res) => {
        setInstructors(res.data);
      });
  }, []);

  console.log(instructors);
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <SectionTitle
          title="Meet Our Teachers"
          subTitle="Our Team"
          description="Discover the talented individuals behind our music academy. Meet our exceptional teachers, each bringing a wealth of experience and passion to their craft. Get to know their unique styles, backgrounds, and teaching philosophies. We've carefully selected a team of dedicated professionals who are committed to nurturing your musical talent and helping you achieve your goals."
        />
        <div className="grid grid-cols-4"></div>
      </div>
    </section>
  );
};

export default PopularInstructors;
