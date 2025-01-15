import { techs } from "../constant/experience.constant";

export const Experience = () => {
  return (
    <div name="experience" className="bg-gradient-to-b from-black to-gray-800 ">
      <div className="max-w-7xl m-auto h-auto py-20 xl:m-auto mx-10">
        <div className="text-white">
          <p className="sm:text-4xl text-2xl font-bold inline border-b-4 border-gray-500 text-white">
            Experience
          </p>
          <p className="text-white mb-16 mt-7 font-medium">
            There are the technologies I've worked with
          </p>
        </div>

        <div className="w-full grid grid-cols-2  sm:grid-cols-4 gap-8 text-center py-8 px-5 sm:px-0 text-white">
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={
                " shadow-md hover:scale-105 duration-500 py-2 rounded-lg cursor-pointer " +
                "" +
                style
              }
            >
              <img src={src} alt={title} className="w-20 mx-auto" />
              <p className="mt-4 font-medium">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
