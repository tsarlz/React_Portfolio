import { FaFacebookSquare, FaInstagram, FaGlobeAmericas } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import {
  IoLogoLinkedin,
  IoLocation,
  IoPhonePortraitOutline,
} from "react-icons/io5";
import { MdEmail } from "react-icons/md";

export const socials = [
  {
    id: 1,
    icon: <FaFacebookSquare className=" group-hover:text-cyan-500" size={40} />,
    text: "/charleslester",
    href: "https://www.facebook.com/charleslester.radores.9",
  },
  {
    id: 2,
    icon: <FaInstagram className=" group-hover:text-cyan-500" size={40} />,
    text: "/tsarls_/",
    href: "https://www.instagram.com/tsarls_/",
  },
  {
    id: 3,
    icon: <FaXTwitter className=" group-hover:text-cyan-500" size={40} />,
    text: "/Tsarls_1",
    href: "https://twitter.com/Tsarls_1",
  },
  {
    id: 4,
    icon: <IoLogoLinkedin className=" group-hover:text-cyan-500" size={40} />,
    text: "linkedin.com",
    href: "https://www.linkedin.com/in/charles-lester-radores-54657a292/",
  },
];

export const locs = [
  {
    id: 1,
    icon: <FaGlobeAmericas className=" group-hover:text-cyan-500" size={40} />,
    text: "Philippines",
  },
  {
    id: 2,
    icon: <IoLocation className=" group-hover:text-cyan-500" size={40} />,
    text: "Binangonan, Rizal",
  },
  {
    id: 3,
    icon: <MdEmail className=" group-hover:text-cyan-500" size={40} />,
    text: "charleslester.official@gmail.com",
    href: "mailto:charleslester.official@gmail.com",
  },
  {
    id: 4,
    icon: (
      <IoPhonePortraitOutline
        className=" group-hover:text-cyan-500"
        size={40}
      />
    ),
    text: "+63 976 662 3761",
    href: "tel:+63 976 662 3761",
  },
];
