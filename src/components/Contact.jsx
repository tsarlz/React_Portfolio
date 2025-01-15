import { IoIosSend } from "react-icons/io";
import { socials } from "../constant/contact.constant";
import { locs } from "../constant/contact.constant";
import { useRef } from "react";

export const Contact = () => {
  const formRef = useRef();
  function handleSubmit(e) {
    e.preventDefault(); // Prevent the default form submission
    formRef.current.submit();
    formRef.current.reset();
  }

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
              <span className="group flex flex-col items-center justify-center text-center ">
                {icon}
                <div className="mt-4 text-lg font-medium">{text}</div>
              </span>
            </a>
          ))}
        </div>
        <div>
          <form
            ref={formRef}
            action="https://getform.io/f/aollnvmb"
            method="POST"
            className="flex flex-col w-full md:w-2/3 mx-auto"
          >
            <input
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none mb-5"
              name="name"
              type="text"
              placeholder="Enter your name"
              required
            />
            <input
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none mb-5"
              name="email"
              type="email"
              placeholder="Enter your email"
              required
            />
            <textarea
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none mb-5"
              name="message"
              id=""
              rows="10"
              placeholder="Message"
              required
            ></textarea>
            <button
              onClick={handleSubmit}
              className=" rounded-md py-2 mt-10 text-white text-xl font-bold flex items-center justify-center  bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer group"
            >
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
                <span className="group flex flex-col items-center justify-center text-center ">
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
