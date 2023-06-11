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
      <section className={`py-16 ${darkMode ? "bg-black" : ""}`}>
        <div className="container">
          <div className="grid grid-cols-4 gap-6 max-w-7xl mx-auto mt-12">
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
