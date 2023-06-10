import React from "react";
import { useSaveClasses } from "../../../API/useSavedClasses";
import DashboardTitle from "../../../Components/Dashboard/DashboardTitle";
import MyClassCard from "./MyClassCard";

const MySelectedClass = () => {
  const [savedClasses, classesLoading] = useSaveClasses();
  console.log(savedClasses);
  return (
    <section>
      <div className="db__container">
        <DashboardTitle title="My Selected Classes" />

        <div className="grid grid-cols-3 gap-6 mt-6">
          {savedClasses.map((item) => (
            <MyClassCard key={item._id} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MySelectedClass;
