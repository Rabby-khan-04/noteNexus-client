import React from "react";
import { FaGoogle } from "react-icons/fa";
import googleIcon from "../../../assets/Images/Login/google.svg";
import { useAuth } from "../../../API/useAuth";
import Swal from "sweetalert2";

const SocialLogin = () => {
  const { googleLogin } = useAuth();

  // Google Login Handler
  const handleGoogleLogin = () => {
    googleLogin()
      .then(() => {
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
    <>
      <div className="mt-8">
        <div className="divider text-accent font-semibold">OR</div>
        <button
          onClick={handleGoogleLogin}
          className="flex items-center justify-center w-full mt-4 text-white rounded-lg shadow-md hover:bg-gray-100"
        >
          <div className="px-4 py-3">
            <img src={googleIcon} className="h-10" alt="" />
          </div>
          <span className="px-4 py-3 w-5/6 text-center text-gray-600 font-bold">
            Sign in with Google
          </span>
        </button>
      </div>
    </>
  );
};

export default SocialLogin;
