import { FaFacebookSquare, FaInstagram, FaGithub } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";

export const socials = [
  {
    id: 1,
    icon: (iconSize) => (
      <FaFacebookSquare className=" hover:text-cyan-500" size={iconSize} />
    ),
    href: "https://www.facebook.com/charleslester.radores.9",
  },
  {
    id: 2,
    icon: (iconSize) => (
      <FaInstagram className=" hover:text-cyan-500" size={iconSize} />
    ),
    href: "https://www.instagram.com/tsarls_/",
  },
  {
    id: 3,
    icon: (iconSize) => (
      <FaXTwitter className=" hover:text-cyan-500" size={iconSize} />
    ),
    href: "https://twitter.com/Tsarls_1",
  },
  {
    id: 4,
    icon: (iconSize) => (
      <IoLogoLinkedin className=" hover:text-cyan-500" size={iconSize} />
    ),
    href: "https://www.linkedin.com/in/charles-lester-radores-54657a292/",
  },
  {
    id: 5,
    icon: (iconSize) => (
      <FaGithub className=" hover:text-cyan-500" size={iconSize} />
    ),
    href: "https://www.linkedin.com/in/charles-lester-radores-54657a292/",
  },
];
