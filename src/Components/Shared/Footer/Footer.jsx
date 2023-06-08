import React from "react";
import Newsletter from "./Newsletter";
import footerLogo from "../../../assets/Logo/logo_white.png";
import {
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";
import { MdLocationOn, MdPhone } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-accent">
      <div className="container pt-32 pb-5">
        <div className="-mt-44 mb-4">
          <Newsletter />
        </div>
        <div className="grid grid-cols-4 gap-6">
          <div className="col-span-2">
            <img src={footerLogo} className="block mb-3" alt="" />
            <p className="text-base text-white">
              Unlock your musical potential with our online music courses.
              Discover the joy of learning, mastering melodies, exploring
              harmonies, and perfecting your rhythm. Join our vibrant community
              of music enthusiasts and embark on a transformative musical
              journey. Let the notes guide you at Note Nexus
            </p>
            <div className="mt-5 space-x-3">
              <button className="btn btn-circle bg-[#4e71a8] border-none">
                <FaFacebookF className="text-2xl text-white" />
              </button>
              <button className="btn btn-circle bg-[#d13e87] border-none">
                <FaInstagram className="text-2xl text-white" />
              </button>
              <button className="btn btn-circle bg-[#ff0000] border-none">
                <FaYoutube className="text-2xl text-white" />
              </button>
            </div>
          </div>
          <div className="">
            <h2 className="text-3xl font-bold text-primary mb-4">Menu</h2>
            <ul className="text-xl text-white space-y-3">
              <li>Home</li>
              <li>Classes</li>
              <li>Instructors</li>
            </ul>
          </div>
          <div className="">
            <h2 className="text-3xl font-bold text-primary mb-4">Contact Us</h2>
            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span>
                  <MdLocationOn className="text-2xl text-primary" />
                </span>
                <p className="text-lg text-white font-semibold">
                  7600, Really Nice place
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span>
                  <FaEnvelope className="text-2xl text-primary" />
                </span>
                <p className="text-lg text-white font-semibold">
                  exapmle@gmail.com
                </p>
              </div>
              <div className="flex items-center gap-2">
                <span>
                  <MdPhone className="text-2xl text-primary" />
                </span>
                <p className="text-lg text-white font-semibold">
                  +880 1964-359-321
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#0a3f55] py-4">
        <p className="text-center text-lg font-semibold text-white">
          &copy; 2023 All Right Reserved By{" "}
          <Link className="font-bold" to="/">
            <span className="text-primary">Note</span>{" "}
            <span className="text-secondary">Nexus</span>
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
