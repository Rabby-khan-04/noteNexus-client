import React from "react";
import { useForm } from "react-hook-form";
import DashboardTitle from "../../../Components/Dashboard/DashboardTitle";
import { useMyclasses } from "../../../API/useMyClasses";
import MyClassCard from "./MyClassCard";
import { Link } from "react-router-dom";

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
        {myClasses.length < 1 && (
          <>
            <div className="text-center mt-20 space-y-3">
              <h2 className="text-4xl text-accent font-nunito uppercase font-bold">
                No Classes Found
              </h2>
              <Link
                to="/dashboard/add-class"
                className="btn btn-secondary text-lg font-nunito text-white"
              >
                Add New CLass
              </Link>
            </div>
          </>
        )}
      </div>
    </section>
  );
};

export default MyClasses;
