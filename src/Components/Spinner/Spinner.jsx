import React from "react";
import { HashLoader } from "react-spinners";

const Spinner = () => {
  return (
    <div
      className="
  h-[calc(100vh-80px)]
  flex 
  flex-col 
  justify-center 
  items-center 
"
    >
      <HashLoader size={100} color="#c25934" />
    </div>
  );
};

export default Spinner;
