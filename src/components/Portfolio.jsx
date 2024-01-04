import React from 'react';
import KodeResto from '../assets/1.png';
import Lister from '../assets/2.png';
import Bretles from '../assets/3.png';
import CineZone from '../assets/4.png';
import KodeCamp from '../assets/5.png';
import KodeLedger from '../assets/6.png';
import KodeNews from '../assets/7.png';

export const Portfolio = () => {
  const portfolios = [
    {
      id: 1,
      src: Bretles,
      page: 'https://bretleshome.netlify.app',
      git: 'https://github.com/CLAradores/Mini_2_-Project_Presentation.git',
    },
    {
      id: 2,
      src: CineZone,
      page: 'https://cinezonee.netlify.app',
      git: 'https://github.com/CLAradores/CineZone.git',
    },
    {
      id: 3,
      src: Lister,
      page: 'https://lister1.netlify.app',
      git: 'https://github.com/CLAradores/Mini1-Project.git',
    },
    {
      id: 4,
      src: KodeResto,
      page: 'https://koderestoo.netlify.app',
      git: 'https://github.com/CLAradores/KodeResto.git',
    },
    {
      id: 5,
      src: KodeCamp,
      page: 'https://kodecampp.netlify.app',
      git: 'https://github.com/CLAradores/KodeCamp.git',
    },
    {
      id: 6,
      src: KodeLedger,
      page: 'https://kodeledgerr.netlify.app',
      git: 'https://github.com/CLAradores/KodeLedger.git',
    },
    {
      id: 7,
      src: KodeNews,
      page: 'https://kodeknews.netlify.app',
      git: 'https://github.com/CLAradores/KodeNews.git',
    },
  ];
  return (
    <div name="portfolio" className="bg-gradient-to-b from-black to-gray-800 ">
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
                <a
                  href={page}
                  className="w-1/2 px-6 my-3 m-4 duration-200 hover:scale-105 text-center "
                  target="_blank"
                >
                  Demo
                </a>
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
