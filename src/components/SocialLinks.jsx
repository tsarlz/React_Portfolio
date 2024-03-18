import React from "react";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { BsFillPersonLinesFill } from "react-icons/bs";

export const SocialLinks = () => {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      style: "rounded-tr-md",
      href: "https://www.linkedin.com/in/charles-lester-radores-54657a292/",
    },
    {
      id: 2,
      child: (
        <>
          Facebook <FaFacebook size={30} />
        </>
      ),
      href: "https://www.facebook.com/charleslester.radores.9",
    },
    {
      id: 3,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/CLAradores",
    },
    {
      id: 4,
      child: (
        <>
          Mail <FiMail size={30} />
        </>
      ),
      href: "mailto:charleslester.official@gmail.com",
    },
    {
      id: 5,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      style: "rounded-br-md",
      href: "/resume_CV.pdf",
      download: true,
    },
  ];
  return (
    <div className="hidden xl:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={
              "flex justify-between items-center w-40 h-1/4 px-4 py-2   ml-[-100px] hover:rounded-md hover:ml-[-10px] duration-300 bg-gray-500" +
              " " +
              style
            }
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};
