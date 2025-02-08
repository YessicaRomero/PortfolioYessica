import video from '../assets/crudReact.mp4';
import ReactPlayer from 'react-player';
import GitHub from '@mui/icons-material/GitHub';
import video2 from '../assets/trivia.mp4';
import Peluqueria from '../assets/peluqueria.mp4';
import movies from '../assets/movie.mp4';
import back from '../assets/back.mp4';
import { useNavigate } from "react-router-dom";

function Project() {
  
  

  const navigate = useNavigate();

  const HandleClick = () => {
    navigate("/")
  }

  return (
    <div className=" px-4 mb-4" >
      <div className='flex justify-center items-center '>
        
        <button onClick={HandleClick} className="bg-pink-500 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l">
          Prev
        </button>
        <h2 className='relative w-full xl:text-9xl md:text-8xl text-5xl sm:tracking-[17px] tracking-[10px] uppercase text-center leading-[0.70em] outline-none animate-dimlight box-reflect text-slate-500 p-4  m-4 '>Projects</h2>


      </div>

      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 m-4 p-4 border-4 border-double bg-gray-900 " >


        <div className="bg-gray-400 p-2 rounded-lg shadow-md relative h-auto w-full max-w-sm mx-auto" >
          <ReactPlayer loading="lazy" url={video} controls loop width={"100%"} className="w-full" />
          <div className="p-4">
            <h5 className="text-green-900 text-lg font-semibold">Music Library || FullStack</h5>
            <p className="text-slate-800 text-sm mt-2 max-w-sm m-2">I implemented a CRUD using React and NestJS. The data is consumed from a JSON file on the frontend, while on the backend I used NestJS to handle paths, validations, and business logic. This project allowed me to delve deeper into the interaction between frontend and backend.</p>
            <a href="https://github.com/YessicaRomero/Api-con-Nestjs-React.git" className="bottom-4 left-4 right-4 text-center text-black-50 hover:bg-pink-500 font-semibold p-2 no-underline ">Go to code<GitHub /> </a>
          </div>
        </div>



        <div className="bg-gray-400 p-2 rounded-lg shadow-md relative overflow-hidden w-full max-w-sm mx-auto" >
          <ReactPlayer url={video2} controls loop width={"100%"} className="w-full" />
          <div className="p-4">
            <h5 className="text-green-900 text-lg font-semibold">Trivia || FullStack</h5>
            <p className="text-slate-800 text-sm mt-2 max-w-sm m-2">I developed an interactive trivia game as a team. I participated on the frontend, using React, Bootstrap and FontAwesome. In addition, we implemented secure authentication with JSON Web Tokens and used Figma for collaborative design.</p>
            <a href="https://github.com/YessicaRomero/triviaFullSatck.git" className="bottom-4 left-4 right-4 text-center text-black-50 hover:bg-pink-500 font-semibold p-2 no-underline ">Go to code<GitHub /> </a>
          </div>
        </div>



        <div className="bg-gray-400 p-2 rounded-lg shadow-md relative overflow-hidden w-full max-w-sm mx-auto" >
          <ReactPlayer url={Peluqueria} controls loop width={"100%"} className="w-full" />
          <div className="p-4">
            <h5 className="text-green-900 text-lg font-semibold">LandingPage Hairdresser || Front End </h5>
            <p className="text-slate-800 text-sm mt-2 max-w-sm m-2">I designed and developed a Landing Page for a hair salon using React and Bootstrap. The focus was on creating an attractive and responsive interface, applying the best web design practices.</p>
            <a href="https://github.com/YessicaRomero/LandingPage" className="bottom-4 left-4 right-4 text-center text-black-50 hover:bg-pink-500 font-semibold p-2 no-underline ">Go to code <GitHub /></a>
          </div>
        </div>


        <div className="bg-gray-400 p-2 rounded-lg shadow-md relative overflow-hidden w-full max-w-sm mx-auto" >
          <ReactPlayer url={movies} controls loop width={"100%"} className="w-full" />
          <div className="p-4">
            <h5 className="text-green-900 text-lg font-semibold">Movies || Front End</h5>
            <p className="text-slate-800 text-sm mt-2 max-w-sm m-2">I consumed a movie API to render dynamic data in real time. I used React to handle the state and rendering of components, achieving a smooth and efficient user experience.</p>
            <a href="https://github.com/YessicaRomero/apiReact" className="bottom-4 left-4 right-4 text-center text-black-50 hover:bg-pink-500 font-semibold p-2 no-underline ">Go to code <GitHub /></a>

          </div>
        </div>



        <div className="bg-gray-400 p-2 rounded-lg shadow-md relative overflow-hidden w-full max-w-sm mx-auto" >
          <ReactPlayer url={back} controls loop width={"100%"} className="w-full" />
          <div className="p-4">
            <h5 className="text-green-900 text-lg font-semibold">Trivia || Back end </h5>
            <p className="text-slate-800 text-sm mt-2 max-w-sm m-2">As part of the development of the backend of the Trivia project, I designed and developed entities and DTOs, integrated a database deployed in Oracle and applied security measures such as Helmet and Throttler. I also set up endpoints with validations and best practices. </p>
            <a href="https://github.com/YessicaRomero/triviaBack.git" className="bottom-4 left-4 right-4 text-center text-black-50 hover:bg-pink-500 font-semibold p-2 no-underline ">Go to code<GitHub /> </a>
          </div>
        </div>



      </div>


    </div>



  )
};
export default Project