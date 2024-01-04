import React from 'react';

export const About = () => {
  return (
    <div
      name="about"
      className="bg-gradient-to-b from-black to-gray-800 text-white "
    >
      <div className="max-w-7xl xl:m-auto mx-10   flex flex-col justify-center h-[100vh]">
        <div className="pb-8">
          <p className=" sm:text-4xl text-2xl font-bold inline border-b-4 border-gray-500 text-white">
            About
          </p>
        </div>
        <div>
          <p className="sm:text-xl sm:mt-20 mt-8">
            Starting my journey into web development at 19 after studying
            accounting and business management, I joined KodeGo Bootcamp.
            Graduating as a top student, I not only learned coding but also
            leadership. Guiding a team taught me about setting clear goals and
            working together. Apart from coding, I'm always learning, attending
            seminars, watching tech videos, and staying healthy with morning
            jogs, basketball, and reading.
          </p>
          <br />
          <p className="sm:text-xl">
            One notable challenge was leading a project during the bootcamp,
            teaching me the importance of communication and motivation.
            Graduating at the top highlighted my dedication. As I keep learning
            and deepening my skills, I see myself working on exciting projects.
            My journey is about growing continuously and loving the
            ever-changing world of web development.
          </p>
        </div>
      </div>
    </div>
  );
};
