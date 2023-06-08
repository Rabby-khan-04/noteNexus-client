import React from "react";
import loginImg from "../../assets/Images/Login/login.png";
import { useForm } from "react-hook-form";
import { FaUserAlt } from "react-icons/fa";
import { RiLockPasswordFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import SocialLogin from "../../Components/Shared/SocialLogin/SocialLogin";
import Swal from "sweetalert2";
import { useAuth } from "../../API/useAuth";
import { saveUser } from "../../API/useUserRole";

const Login = () => {
  const { userSignin } = useAuth();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    const email = data.email;
    const password = data.password;

    // User Sign In Function
    userSignin(email, password)
      .then((result) => {
        const loggedUser = result.user;
        saveUser(loggedUser);
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Successfully Logged IN!!",
          showConfirmButton: false,
          timer: 1500,
        });
      })
      .catch((err) => {
        Swal.fire({
          position: "center",
          icon: "error",
          title: `${err.message}`,
          showConfirmButton: false,
          timer: 1500,
        });
      });
  };

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
                  type="email"
                  id="email"
                  className="input__field"
                  placeholder="Email"
                  {...register("email", { required: true })}
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
                  {...register("password", { required: true })}
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
