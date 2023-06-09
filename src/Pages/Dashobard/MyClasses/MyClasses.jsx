import React from "react";
import { useForm } from "react-hook-form";
import DashboardTitle from "../../../Components/Dashboard/DashboardTitle";
import { useMyclasses } from "../../../API/useMyClasses";
import MyClassCard from "./MyClassCard";

const MyClasses = () => {
  const [myClasses, isClassesLoading, classesRefetch] = useMyclasses();

  return (
    <section>
      <div className="db__container">
        <DashboardTitle title="My Classes" />
        <div className="grid grid-cols-3 gap-6 mt-6">
          {myClasses.map((item) => (
            <MyClassCard item={item} key={item._id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MyClasses;
