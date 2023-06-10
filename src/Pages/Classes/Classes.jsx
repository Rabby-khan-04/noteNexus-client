import React from "react";
import ClassesBanner from "../../Components/Classes/ClassesBanner";
import AllClasses from "../../Components/Classes/AllClasses/AllClasses";
import Title from "../../Components/Shared/Title/Title";

const Classes = () => {
  return (
    <>
      <Title title="Classes" />
      <ClassesBanner />
      <AllClasses />
    </>
  );
};

export default Classes;
