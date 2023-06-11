import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import PopularClassCard from "../../Home/PopularClasses/PopularClassCard";
import { ThemeContext } from "../../../Providers/ThemeProvider";

const AllClasses = () => {
  const [classes, setClasses] = useState([]);
  const { darkMode } = useContext(ThemeContext);

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_BASE_URL}/all-classes`).then((res) => {
      setClasses(res.data);
    });
  }, []);
  return (
    <section className={`py-16 ${darkMode ? "bg-black" : ""}`}>
      <div className="container">
        <div className="grid grid-cols-3 gap-6 max-w-7xl mx-auto mt-12">
          {classes.map((item) => (
            <PopularClassCard key={item._id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AllClasses;
