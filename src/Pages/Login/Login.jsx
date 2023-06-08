import React from "react";
import loginImg from "../../assets/Images/Login/login.png";
import { useForm } from "react-hook-form";
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import SocialLogin from "../../Components/Shared/SocialLogin/SocialLogin";

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <section className="h-[calc(100vh-72px)] flex justify-center items-center">
      <div className="container">
        <div className="max-w-4xl mx-auto grid grid-cols-2 py-12 px-10 shadow-md rounded-lg">
          <div>
            <img src={loginImg} className="w-full" alt="login image" />
            <div className="text-center">
              <Link
                to="/signup"
                className="text-base font-medium underline text-accent"
              >
                Create An Account
              </Link>
            </div>
          </div>
          <div className="self-center">
            <h2 className="text-4xl font-semibold text-accent mb-6 uppercase">
              Login
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="input__wrapper">
                <label htmlFor="email" className="px-2">
                  <FaUserAlt className="text-xl" />
                </label>
                <input
                  type="text"
                  id="email"
                  className="input__field"
                  placeholder="Email"
                  {...register("Email", { required: true })}
                />
              </div>
              <div className="input__wrapper">
                <label htmlFor="password" className="px-2">
                  <RiLockPasswordFill className="text-xl" />
                </label>
                <input
                  type="password"
                  id="password"
                  className="input__field"
                  placeholder="Password"
                  {...register("Password", { required: true })}
                />
              </div>
              <input
                className="btn btn-block btn-accent text-lg text-white"
                type="submit"
                value="Login"
              />
            </form>
            <SocialLogin />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
