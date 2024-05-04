import { Link } from "react-scroll";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";
import HeroIMG from "../assets/hero-img.png";
import { FaFileDownload } from "react-icons/fa";
import { useState, useEffect } from "react";
import { IoIosArrowUp } from "react-icons/io";

export const Home = () => {
  const [iconSize, setIconSize] = useState({ firstIcon: 25, secondIcon: 20 });

  const handleResize = () => {
    window.innerWidth < 768
      ? setIconSize({ firstIcon: 20, secondIcon: 15 })
      : setIconSize({ firstIcon: 25, secondIcon: 20 });
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.addEventListener("resize", handleResize);
    };
  }, []);

  const handleToTop = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  window.onscroll = function () {
    if (
      document.body.scrollTop > 100 ||
      document.documentElement.scrollTop > 100
    ) {
      document.getElementById("arrowToTop").style.display = "block";
    } else {
      document.getElementById("arrowToTop").style.display = "none";
    }
  };

  return (
    <div
      name="home"
      className="snap-center bg-gradient-to-b from-black to-gray-800 text-gray-500"
    >
      <div className="flex justify-center items-center sm:h-screen h-auto md:ml-10 md:mr-10 pt-10 sm:pt-0">
        <div className="flex flex-col   items-center max-w-[1200px] m-auto md:flex-row">
          <div className="  text-white sm:max-w-xl max-w-sm mt-20 md:mt-0 mb-16 md:mb-0 md:me-10 sm:mx-auto mx-5">
            <p className="sm:text-2xl text-sm text-gray-100 mb-3">
              Hi, It's me,
            </p>
            <h1 className="sm:text-5xl text-2xl font-bold  mb-3">
              Charles Lester Radores
            </h1>
            <h3 className="sm:text-xl text-[1rem]  text-gray-100 font-bold mb-8">
              Your Disciplined and Dedicated Web Developer.
            </h3>
            <p className="text-gray-300 mb-6 font-medium">
              " Embracing the timeless wisdom of Stoic philosophy, I approach
              challenges with resilience, finding tranquility in the midst of
              the coding storm. In every bug ,
              <span className="text-cyan-400 font-semibold">
                &nbsp; I find an opportunity for growth
              </span>
              📈. "
            </p>
            <div className="flex justify-evenly  sm:justify-start  ">
              <Link to="portfolio">
                <button className="sm:mr-20 text-white w-fit sm:px-6 px-3 sm:py-3 py-2 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer group">
                  Portfolio
                  <span className="group-hover:rotate-90 duration-300">
                    <MdOutlineKeyboardDoubleArrowRight
                      size={iconSize.firstIcon}
                      className="ml-1"
                    />
                  </span>
                </button>
              </Link>
              <a
                href="/CharlesLesterRadores_resume.pdf"
                download={true}
                className="text-white w-fit sm:px-6 px-3 sm:py-3 py-2 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer group"
              >
                Resume
                <span className="group-hover:-rotate-180 duration-300">
                  <FaFileDownload size={iconSize.secondIcon} className="ml-2" />
                </span>
              </a>
            </div>
          </div>
          <div
            className=" bg-blue-500 object-cover bg-center bg-cover  h-[340px] w-[280px]  md:w-[285px] rounded-2xl mx-auto sm:mb-0 mb-16"
            style={{ backgroundImage: `url(${HeroIMG})` }}
          ></div>
        </div>
      </div>
      <div
        className=" fixed right-16 bottom-10 text-cyan-500 "
        id="arrowToTop"
        onClick={handleToTop}
      >
        <IoIosArrowUp size={40} />
      </div>
    </div>
  );
};
