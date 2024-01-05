import { FaFacebookSquare, FaInstagram, FaGlobeAmericas } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import {
  IoLogoLinkedin,
  IoLocation,
  IoPhonePortraitOutline,
} from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';
import { IoIosSend } from 'react-icons/io';

export const Contact = () => {
  const locs = [
    {
      id: 1,
      icon: <FaGlobeAmericas size={40} />,
      text: 'Philippines',
    },
    {
      id: 2,
      icon: <IoLocation size={40} />,
      text: 'Binangonan, Rizal',
    },
    {
      id: 3,
      icon: <MdEmail size={40} />,
      text: 'charleslester.official@gmail.com',
      href: 'mailto:charleslester.official@gmail.com',
    },
    {
      id: 4,
      icon: <IoPhonePortraitOutline size={40} />,
      text: '+63 977 655 0239',
      href: 'tel:+63 977 655 0239',
    },
  ];
  const socials = [
    {
      id: 1,
      icon: <FaFacebookSquare size={40} />,
      text: '/charleslester.radores.9',
      href: 'https://www.facebook.com/charleslester.radores.9',
    },
    {
      id: 2,
      icon: <FaInstagram size={40} />,
      text: '/tsarls_/',
      href: 'https://www.instagram.com/tsarls_/',
    },
    {
      id: 3,
      icon: <FaXTwitter size={40} />,
      text: '/Tsarls_1',
      href: 'https://twitter.com/Tsarls_1',
    },
    {
      id: 4,
      icon: <IoLogoLinkedin size={40} />,
      text: '/charles-lester-radores-54657a292/',
      href: 'https://www.linkedin.com/in/charles-lester-radores-54657a292/',
    },
  ];
  return (
    <div name="contact" className="bg-gradient-to-b from-black to-gray-800 ">
      <div className="max-w-7xl xl:m-auto mx-10 h-auto py-20 ">
        <div className="text-white ">
          <p className="sm:text-4xl text-2xl font-bold inline border-b-4 border-gray-500 text-white ">
            Contact
          </p>
          <p className="text-white mb-16 mt-7 font-medium">
            Submit the form below to get in touch with me
          </p>
        </div>
        <div className="text-white grid gap-x-6 gap-y-12 grid-cols-2 sm:grid-cols-4 max-w-[1000px] mx-auto mb-20">
          {locs.map(({ id, icon, text, href }) => (
            <a key={id} href={href} target="_blank" className=" cursor-pointer">
              <span className="flex flex-col items-center justify-center text-center ">
                {icon}
                <div className="mt-4 text-lg font-medium">{text}</div>
              </span>
            </a>
          ))}
        </div>
        <div>
          <form
            action="https://getform.io/f/284fd283-0602-4410-ba61-e14b31405473"
            method="POST"
            className="flex flex-col w-full md:w-2/3 mx-auto"
          >
            <input
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none mb-5"
              name="name"
              type="text"
              placeholder="Enter your name"
            />
            <input
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none mb-5"
              name="email"
              type="email"
              placeholder="Enter your email"
            />
            <textarea
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none mb-5"
              name="message"
              id=""
              rows="10"
              placeholder="Message"
            ></textarea>
            <button className=" rounded-md py-2 mt-10 text-white text-xl font-bold flex items-center justify-center  bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer group">
              Send
              <span className="group-hover:rotate-45 duration-300">
                <IoIosSend size={25} className="ml-1" />
              </span>
            </button>
          </form>
          <h3 className="text-2xl font-semibold text-center mt-20 text-white">
            Thru My Social Media Accounts
          </h3>
          <div className="text-white grid gap-x-6 gap-y-12 place-content-center grid-cols-2 sm:grid-cols-4 max-w-[1000px] mx-auto mt-10">
            {socials.map(({ id, icon, text, href }) => (
              <a key={id} href={href} target="_blank">
                <span className="flex flex-col items-center justify-center text-center ">
                  {icon}
                  <div className="mt-4 text-lg font-medium">{text}</div>
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
