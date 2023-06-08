import axios from "axios";
import { useEffect } from "react";
import { useAuth } from "./useAuth";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const axiosSecure = axios.create({
  baseURL: `${import.meta.env.VITE_BASE_URL}`,
});

export const useAxiosSecure = () => {
  const { userLogout } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    axiosSecure.interceptors.request.use((req) => {
      const token = localStorage.getItem("user-access-token");
      if (token) {
        req.headers.Authorization = `Bearer ${token}`;
      }
      return req;
    });

    axiosSecure.interceptors.response.use(
      (res) => res,
      (err) => {
        if (
          err?.response &&
          (err?.response?.status === 403 || err?.response?.status === 401)
        ) {
          userLogout();
          navigate("/login");
          Swal.fire({
            position: "center",
            icon: "error",
            title: `${err?.response?.data.error}`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    );
  }, []);
};
