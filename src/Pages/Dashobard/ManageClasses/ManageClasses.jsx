import React, { useState } from "react";
import DashboardTitle from "../../../Components/Dashboard/DashboardTitle";
import { useAllClasses } from "../../../API/UseAllClasses";
import ClassCard from "./ClassCard";
import Title from "../../../Components/Shared/Title/Title";

const ManageClasses = () => {
  const [allClasses, isClassLoading, refetchClasses] = useAllClasses();

  return (
    <>
      <Title title="Manage Classes" />
      <section>
        <div className="db__container">
          <DashboardTitle title="Manage Classes" />

          <div className="grid grid-cols-3 gap-6 mt-6">
            {allClasses.map((item) => (
              <ClassCard
                key={item._id}
                item={item}
                refetchClasses={refetchClasses}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default ManageClasses;
