import React from "react";
import { useSaveClasses } from "../../../API/useSavedClasses";
import DashboardTitle from "../../../Components/Dashboard/DashboardTitle";
import MyClassCard from "./MyClassCard";
import { Link } from "react-router-dom";
import Title from "../../../Components/Shared/Title/Title";

const MySelectedClass = () => {
  const [savedClasses, classesLoading, classesRefetch] = useSaveClasses();
  return (
    <>
      <Title title="My Selected Classes" />
      <section>
        <div className="db__container">
          <DashboardTitle title="My Selected Classes" />

          <div className="grid grid-cols-3 gap-6 mt-6">
            {savedClasses.map((item) => (
              <MyClassCard
                key={item._id}
                item={item}
                classesRefetch={classesRefetch}
              />
            ))}
          </div>
          {savedClasses.length < 1 && (
            <>
              <div className="text-center mt-20 space-y-3">
                <h2 className="text-4xl text-accent font-nunito uppercase font-bold">
                  No Classes Found
                </h2>
                <Link
                  to="/classes"
                  className="btn btn-secondary text-lg font-nunito text-white"
                >
                  Book Class
                </Link>
              </div>
            </>
          )}
        </div>
      </section>
    </>
  );
};

export default MySelectedClass;
