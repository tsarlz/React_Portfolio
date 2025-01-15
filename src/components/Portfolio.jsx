import React from "react";
import { portfolios } from "../constant/porfolio.constant";

export const Portfolio = () => {
  return (
    <div
      id="porfolio"
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 "
    >
      <div className="max-w-7xl  xl:m-auto mx-10  h-auto py-20 ">
        <div>
          <p className="sm:text-4xl text-2xl font-bold inline border-b-4 border-gray-500 text-white ">
            Portfolio
          </p>
          <p className="text-white my-7 font-medium">
            Check out of my work right here
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0   ">
          {portfolios.map(({ id, src, page, git }) => (
            <div key={id} className="shadow-md shadow-gray-200 rounded-lg">
              <img
                src={src}
                alt="Real Estate Website PicTure"
                className="rounded-md duration-200 hover:scale-105 cursor-pointer "
              />
              <div className="text-white flex justify-center items-center">
                {id !== 8 && (
                  <a
                    href={page}
                    className="w-1/2 px-6 my-3 m-4 duration-200 hover:scale-105 text-center "
                    target="_blank"
                  >
                    Demo
                  </a>
                )}
                <a
                  href={git}
                  className="w-1/2 px-6 my-3 m-4 duration-200 hover:scale-105 text-center"
                  target="_blank"
                >
                  Code
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
