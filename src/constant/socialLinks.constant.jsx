import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { BsFillPersonLinesFill } from "react-icons/bs";

export const links = [
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
    href: "https://github.com/tsarlz",
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
    href: "CharlesLesterRadores_resume.pdf",
    download: true,
  },
];
