import { useState, useEffect } from "react";
import { socials } from "../constant/footer.constant";

export const Footer = () => {
  const [iconSize, setIconSize] = useState(30);

  const handleResize = () => {
    window.innerWidth < 768 ? setIconSize(20) : setIconSize(30);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.addEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="bg-zinc-900  ">
      <div className="flex justify-between h-20 items-center max-w-7xl md:mx-auto mx-10 ">
        <p className="text-xs text-white">
          &#169; 2024 <span className=" font-signature">Tsarls</span> Built with
          ReactJS, Tailwind CSS, Getform and Netlify
        </p>
        <div className="flex text-white w-48 justify-between">
          {socials.map(({ id, icon, href }) => (
            <a key={id} href={href} target="_blank">
              {icon()}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
