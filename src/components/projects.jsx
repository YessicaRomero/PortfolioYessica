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


      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 m-4 p-4 border-4 border-double bg-gray-900" >


        <div className="bg-gray-200 p-2 rounded-lg shadow-md relative overflow-hidden w-full max-w-sm mx-auto" >
          <ReactPlayer loading="lazy" url={video} controls loop width={"100%"} className="w-full" />
          <div className="p-4">
            <h5 className="text-green-200 text-lg font-semibold">Biblioteca Musical || FullStack</h5>
            <p className="text-slate-500 text-sm mt-2 max-w-sm">Implementé un CRUD utilizando React y NestJS. Los datos son consumidos desde un archivo JSON en el frontend, mientras que en el backend utilicé NestJS para manejar rutas, validaciones y lógica de negocio. Este proyecto me permitió profundizar en la interacción entre frontend y backend.</p>
            <a href="https://github.com/YessicaRomero/Api-con-Nestjs-React.git" className="absolute bottom-4 left-4 right-4 text-center text-slate-50 bg-indigo-500 font-semibold  no-underline ">Ir a codigo <GitHub /> </a>
          </div>
        </div>



        <div className="bg-gray-200 p-2 rounded-lg shadow-md relative overflow-hidden w-full max-w-sm mx-auto" >
          <ReactPlayer url={video2} controls loop width={"100%"} className="w-full" />
          <div className="p-4">
            <h5 className="text-green-200 text-lg font-semibold">Trivia || FullStack</h5>
            <p className="text-slate-500 text-sm mt-2 max-w-sm">Desarrollé en equipo un juego de trivia interactivo. Participé en el frontend, utilizando React, Bootstrap y FontAwesome. Además, implementamos autenticación segura con JSON Web Tokens y utilizamos Figma para el diseño colaborativo. Este proyecto fue una gran oportunidad para trabajar en equipo y aplicar diversas tecnologías full stack.</p>
            <a href="https://github.com/YessicaRomero/triviaFullSatck.git" className="absolute bottom-4 left-4 right-4 text-center text-slate-50   bg-indigo-500 font-semibold text-center no-underline">Ir a codigo<GitHub /> </a>
          </div>
        </div>



        <div className="bg-gray-200 p-2 rounded-lg shadow-md relative overflow-hidden w-full max-w-sm mx-auto" >
          <ReactPlayer url={Peluqueria} controls loop width={"100%"} className="w-full" />
          <div className="p-4">
            <h5 className="text-green-200 text-lg font-semibold">LandingPage Peluqueria || Front End </h5>
            <p className="text-slate-500 text-sm mt-2 max-w-sm">Diseñé y desarrollé una Landing Page para una peluquería utilizando React y Bootstrap. El enfoque estuvo en crear una interfaz atractiva y responsiva, aplicando las mejores prácticas de diseño web.</p>
            <a href="https://github.com/YessicaRomero/LandingPage" className=" absolute bottom-4 left-4 right-4 text-center text-slate-50 bg-indigo-500  font-semibold text-center no-underline">Ir a codigo <GitHub /></a>
          </div>
        </div>


        <div className="bg-gray-200 p-2 rounded-lg shadow-md relative overflow-hidden w-full max-w-sm mx-auto" >
          <ReactPlayer url={movies} controls loop width={"100%"} className="w-full" />
          <div className="p-4">
            <h5 className="text-green-200 text-lg font-semibold">Movies || Front End</h5>
            <p className="text-slate-500 text-sm mt-2 max-w-sm">Consumí una API de películas para renderizar datos dinámicos en tiempo real. Utilicé React para manejar el estado y renderización de componentes, logrando una experiencia de usuario fluida y eficiente.</p>
            <a href="https://github.com/YessicaRomero/apiReact" className="absolute bottom-4 left-4 right-4 text-center text-slate-50   bg-indigo-500 font-semibold text-center no-underline">Ir a codigo <GitHub /></a>

          </div>
        </div>



        <div className="bg-gray-200 p-2 rounded-lg shadow-md relative overflow-hidden w-full max-w-sm mx-auto" >
          <ReactPlayer url={back} controls loop width={"100%"} className="w-full" />
          <div className="p-4">
            <h5 className="text-green-200 text-lg font-semibold">Trivia || Back end </h5>
            <p className="text-slate-500 text-sm mt-2 max-w-sm">Como parte del desarrollo del backend del proyecto Trivia, diseñé y desarrollé entidades y DTOs, integré una base de datos desplegada en Oracle y apliqué medidas de seguridad como Helmet y Throttler. También configuré endpoints con validaciones y buenas prácticas. Este proyecto fortaleció mi conocimiento en NestJS y en el diseño de arquitecturas backend.</p>
            <a href="https://github.com/YessicaRomero/triviaBack.git" className="absolute bottom-4 left-4 right-4 text-center text-slate-50 bg-indigo-500  font-semibold text-center no-underline">Ir a codigo<GitHub /> </a>
          </div>
        </div>



      </div>


    </div>



  )
};
export default Project