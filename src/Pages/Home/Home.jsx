import React from "react";
import { useAuth } from "../../API/useAuth";
import Title from "../../Components/Shared/Title/Title";

const Home = () => {
  const { user } = useAuth();

  return (
    <>
      <Title title="Home" />
      <div>Home form {user.name}</div>
    </>
  );
};

export default Home;
