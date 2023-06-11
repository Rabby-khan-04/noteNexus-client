import React, { useState } from "react";
import { useAuth } from "../../API/useAuth";
import { useForm } from "react-hook-form";
import { RiLockPasswordFill } from "react-icons/ri";
import {
  FaEnvelope,
  FaEye,
  FaEyeSlash,
  FaImage,
  FaUserAlt,
} from "react-icons/fa";
import SocialLogin from "../../Components/Shared/SocialLogin/SocialLogin";
import signupImg from "../../assets/Images/Login/login.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { saveUser } from "../../API/useUserRole";
import Title from "../../Components/Shared/Title/Title";

const Signup = () => {
  const { createUser, updateUserProfile } = useAuth();
  const [showPw, setShowPw] = useState(false);
  const [showCPw, setShowCPw] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const from = location?.state?.from?.pathname || "/";
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    // RegEx pattern
    const capital = /^(?=.*[A-Z])/;
    const specialChar = /^(?=.*[@$!%*?&^#])/;

    // Form Data
    const name = data.name;
    const email = data.email;
    const password = data.password;
    const confirmPassword = data.confirmPassword;
    const image = data.image;

    // Password Validation
    if (password.length < 6) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Password must be at least 6 characters long",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    } else if (!capital.test(password)) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Password must contain at least one capital letter",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    } else if (!specialChar.test(password)) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Password must contain at least one special character",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    } else if (password !== confirmPassword) {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Passwords don't match",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    // Create user Function
    createUser(email, password)
      .then((result) => {
        const loggedUser = result.user;
        if (loggedUser) {
          updateUserProfile(name, image)
            .then(() => {
              saveUser(loggedUser);
              Swal.fire({
                position: "center",
                icon: "success",
                title: "Account created successfully",
                showConfirmButton: false,
                timer: 1500,
              });
              navigate(from, { replace: true });
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
        }
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

  // Handle Show Password
  const handleShowPassword = () => {
    setShowPw(!showPw);
  };

  // Handle Show Password
  const handleShowConfirmPassword = () => {
    setShowCPw(!showCPw);
  };

  return (
    <>
      <Title title="Sign up" />
      <section className="h-[calc(100vh-72px)] flex justify-center items-center">
        <div className="container">
          <div className="max-w-4xl mx-auto grid grid-cols-2 py-12 px-10 shadow-md rounded-lg">
            <div>
              <h2 className="text-4xl font-semibold text-accent mb-6 uppercase">
                Sign up
              </h2>
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="input__wrapper">
                  <label htmlFor="name" className="px-2">
                    <FaUserAlt className="text-xl" />
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="input__field"
                    placeholder="Name"
                    {...register("name", { required: true })}
                  />
                </div>
                <div className="input__wrapper">
                  <label htmlFor="email" className="px-2">
                    <FaEnvelope className="text-xl" />
                  </label>
                  <input
                    type="text"
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
                    type={showPw ? "text" : "password"}
                    id="password"
                    className="input__field"
                    placeholder="Password"
                    {...register("password", { required: true })}
                  />
                  <button
                    type="button"
                    onClick={handleShowPassword}
                    className="text-xl text-accent py-2 px-3"
                  >
                    {showPw ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                <div className="input__wrapper">
                  <label htmlFor="confirmPassword" className="px-2">
                    <RiLockPasswordFill className="text-xl" />
                  </label>
                  <input
                    type={showCPw ? "text" : "password"}
                    id="confirmPassword"
                    className="input__field"
                    placeholder="Confirm Password"
                    {...register("confirmPassword", { required: true })}
                  />
                  <button
                    type="button"
                    onClick={handleShowConfirmPassword}
                    className="text-xl text-accent py-2 px-3"
                  >
                    {showCPw ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                <div className="input__wrapper">
                  <label htmlFor="image" className="px-2">
                    <FaImage className="text-xl" />
                  </label>
                  <input
                    type="url"
                    id="image"
                    className="input__field"
                    placeholder="Image URL"
                    {...register("image", { required: true })}
                  />
                </div>
                <input
                  className="btn btn-block btn-accent text-lg text-white"
                  type="submit"
                  value="Sign Up"
                />
              </form>
              <SocialLogin />
            </div>
            <div className="self-center">
              <img src={signupImg} className="w-full" alt="login image" />
              <div className="text-center">
                <Link
                  to="/login"
                  className="text-base font-medium underline text-accent"
                >
                  I am already member
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
