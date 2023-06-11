import React, { useContext, useEffect, useState } from "react";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import axios from "axios";
import InstructorCard from "./InstructorCard";
import { Link } from "react-router-dom";
import { ThemeContext } from "../../../Providers/ThemeProvider";

const PopularInstructors = () => {
  const [instructors, setInstructors] = useState([]);
  const { darkMode } = useContext(ThemeContext);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/instructors?limit=8`)
      .then((res) => {
        setInstructors(res.data);
      });
  }, []);

  console.log(instructors);
  return (
    <section className={`py-16 ${darkMode ? "text-white bg-[#13111f]" : ""}`}>
      <div className="container">
        <SectionTitle
          title="Meet Our Teachers"
          subTitle="Our Team"
          description="Discover the talented individuals behind our music academy. Meet our exceptional teachers, each bringing a wealth of experience and passion to their craft. Get to know their unique styles, backgrounds, and teaching philosophies. We've carefully selected a team of dedicated professionals who are committed to nurturing your musical talent and helping you achieve your goals."
        />
        <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-3 max-w-7xl mx-auto mt-12 px-4 md:px-0">
          {instructors.map((instructor) => (
            <InstructorCard key={instructor._id} instructor={instructor} />
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/instructors"
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

export default PopularInstructors;
