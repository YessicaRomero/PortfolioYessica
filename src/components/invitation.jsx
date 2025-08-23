import { useEffect, useState } from "react";
import FavoriteIcon from '@mui/icons-material/Favorite';


const words = ["No te vallas","sin conocer", "mis proyectos"];

export default function Invitation() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % words.length);
    }, 1000);
    return () => clearInterval(interval);
  }, []);


  return (
    <div className="flex flex-row sm:flex-col md:flex-col lg:flex-row xl:flex-row h-1/3 w-auto m-6 items-center  bg-gradient-to-r from-black-900 via-black-100 to-gray-800 text-white text-4xl font-light ">
      Gracias por tu visita<FavoriteIcon />
      <div className="relative inline-block w-[100px] text-left h-9 align-middle m-6 p-4 ml-2 text-blue-500 text-bold min-h-[100px] ">
        {words.map((word, index) => (
          <div
            key={index}
            className={` flex absolute min-h-[100px] w-full transition-all duration-500 ease-in-out ${index === activeIndex ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
          >
            {word}
          </div>
        ))}
      </div>

    </div>
  );
}