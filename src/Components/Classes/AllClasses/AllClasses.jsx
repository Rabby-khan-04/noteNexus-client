import axios from "axios";
import React, { useEffect, useState } from "react";
import PopularClassCard from "../../Home/PopularClasses/PopularClassCard";

const AllClasses = () => {
  const [classes, setClasses] = useState([]);

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_BASE_URL}/all-classes?limit=6`)
      .then((res) => {
        setClasses(res.data);
      });
  }, []);
  return (
    <section>
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
