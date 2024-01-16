import React from "react";
import { FaArrowRight } from "react-icons/fa";
import profilePic from "../assets/portfolio/profilePic.jpg";
import { Link } from "react-scroll";
const Home = () => {
  return (
    <div
      name="home"
      id="Home"
      className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800 "
    >
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h2 className="text-4xl sm:text-7xl font-bold text-white">
            I'm a Frontend Web developer
          </h2>
          <p className="text-gray-500 py-4 max-w-md">
            I specialize in crafting responsive and pixel-perfect websites using
            the latest web technologies. From concept to execution, I enjoy
            bringing designs to life with clean and efficient code. My toolbox
            includes HTML5, CSS, JavaScript, React, and I'm always exploring new
            tools and frameworks to stay at the forefront of web development
          </p>

          <div>
            <Link
              to="Projects"
              smooth
              duration={300}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <FaArrowRight size={18} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={profilePic}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full max-w-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
