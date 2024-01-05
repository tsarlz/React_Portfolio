import React from 'react';
import { MdOutlineKeyboardDoubleArrowRight } from 'react-icons/md';
import HeroIMG from '../assets/hero-img.png';
import { Link } from 'react-scroll';

export const Home = () => {
  return (
    <div
      name="home"
      className="bg-gradient-to-b from-black to-gray-800 text-gray-500"
    >
      <div className="flex justify-center items-center sm:h-screen h-auto md:ml-10 md:mr-10 pt-10 sm:pt-0">
        <div className="flex flex-col  items-center max-w-[1200px] m-auto md:flex-row">
          <div className="  text-white sm:max-w-xl max-w-sm mb-16 md:mb-0">
            <p className="sm:text-2xl text-sm text-gray-100 mb-3">
              Hi, It's me,
            </p>
            <h1 className="sm:text-5xl text-2xl font-bold  mb-3">
              Charles Lester Radores
            </h1>
            <h3 className="sm:text-xl text-[1rem]  text-gray-100 font-bold mb-8">
              Your Disciplined and Dedicated Junior Full-Stack Web Developer.
            </h3>
            <p className="text-gray-300 mb-6 font-medium">
              " Embracing the timeless wisdom of Stoic philosophy, I approach
              challenges with resilience, finding tranquility in the midst of
              the coding storm. In every bug ,
              <span className="text-blue-500 font-medium">
                &nbsp; I find an opportunity for growth
              </span>
              📈. "
            </p>
            <Link to="portfolio">
              <button className="text-white w-fit sm:px-6 px-3 sm:py-3 py-2 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer group">
                Portfolio
                <span className="group-hover:rotate-90 duration-300">
                  <MdOutlineKeyboardDoubleArrowRight
                    size={25}
                    className="ml-1"
                  />
                </span>
              </button>
            </Link>
          </div>
          <div
            className="ml-10 bg-blue-500 object-cover bg-center bg-cover  h-[340px] w-[280px]  md:w-[285px] rounded-2xl mx-auto sm:mb-16 mb-10"
            style={{ backgroundImage: `url(${HeroIMG})` }}
          ></div>
        </div>
      </div>
    </div>
  );
};
