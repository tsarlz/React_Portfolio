import { FaFacebookSquare, FaInstagram, FaGithub } from 'react-icons/fa';
import { IoLogoLinkedin } from 'react-icons/io5';
import { FaXTwitter } from 'react-icons/fa6';
import { useState, useEffect } from 'react';

export const Footer = () => {
  const [iconSize, setIconSize] = useState(30);

  const handleResize = () => {
    window.innerWidth < 768 ? setIconSize(20) : setIconSize(30);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.addEventListener('resize', handleResize);
    };
  }, []);

  const socials = [
    {
      id: 1,
      icon: <FaFacebookSquare size={iconSize} />,
      href: 'https://www.facebook.com/charleslester.radores.9',
    },
    {
      id: 2,
      icon: <FaInstagram size={iconSize} />,
      href: 'https://www.instagram.com/tsarls_/',
    },
    {
      id: 3,
      icon: <FaXTwitter size={iconSize} />,
      href: 'https://twitter.com/Tsarls_1',
    },
    {
      id: 4,
      icon: <IoLogoLinkedin size={iconSize} />,
      href: 'https://www.linkedin.com/in/charles-lester-radores-54657a292/',
    },
    {
      id: 5,
      icon: <FaGithub size={iconSize} />,
      href: 'https://www.linkedin.com/in/charles-lester-radores-54657a292/',
    },
  ];
  return (
    <div className="bg-zinc-900  ">
      <div className="flex justify-between h-20 items-center max-w-7xl md:mx-auto mx-10 ">
        <p className="text-xs text-white">
          &#169; 2024 <span className=" font-signature">Tsarls</span> Built with
          ReactJS, Tailwind CSS, and Netlify
        </p>
        <div className="flex text-white w-48 justify-between">
          {socials.map(({ id, icon, href }) => (
            <a key={id} href={href} target="_blank">
              {icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
