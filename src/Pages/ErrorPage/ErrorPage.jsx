import React from "react";
import { useLottie } from "lottie-react";
import errorAnimation from "../../assets/Images/ErrorPage/error_animation.json";
import "./ErrorPage.css";
import { Link, useRouteError } from "react-router-dom";

const ErrorPage = () => {
  const options = {
    animationData: errorAnimation,
    loop: true,
  };
  const error = useRouteError();
  const { status, statusText, data } = error;
  const { View } = useLottie(options);
  return (
    <section className="bg-white h-screen flex flex-col items-center justify-center">
      <div className="animation__container">{View}</div>
      <div className="text-center space-y-3">
        <h2 className="text-3xl font-nunito font-bold text-accent">
          <span className="text-secondary">{status || "404"}</span> - Page{" "}
          {statusText || "Not Found"}
        </h2>
        <p className="text-xl font-nunito font-bold text-accent">{data}</p>
        <Link
          to="/"
          className="btn btn-primary font-nunito font-bold text-xl text-black"
        >
          Back To Home
        </Link>
      </div>
    </section>
  );
};

export default ErrorPage;
