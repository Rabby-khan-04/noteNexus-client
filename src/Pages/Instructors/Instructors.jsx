import React, { useContext, useEffect, useState } from "react";
import InstructorsBanner from "../../Components/Instructors/InstructorsBanner";
import axios from "axios";
import InstructorCard from "../../Components/Home/PopularInstructors/InstructorCard";
import Title from "../../Components/Shared/Title/Title";
import { ThemeContext } from "../../Providers/ThemeProvider";

const Instructors = () => {
  const [instructors, setInstructors] = useState([]);
  const { darkMode } = useContext(ThemeContext);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/instructors?limit=8`)
      .then((res) => {
        setInstructors(res.data);
      });
  }, []);

  return (
    <>
      <Title title="Instructors" />
      <InstructorsBanner />
      <section className={`py-16 ${darkMode ? "bg-[#13111f]" : ""}`}>
        <div className="container">
          <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 gap-3 max-w-7xl mx-auto mt-12 px-4 md:px-0">
            {instructors.map((instructor) => (
              <InstructorCard key={instructor._id} instructor={instructor} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Instructors;
