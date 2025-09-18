import GitHub from '@mui/icons-material/GitHub';
import ReactPlayer from 'react-player';
import back from '../assets/back.mp4';
import video from '../assets/crudReact.mp4';
import movies from '../assets/movie.mp4';
import Peluqueria from '../assets/peluqueria.mp4';
import video2 from '../assets/trivia.mp4';

function Project() {





  return (
    <div className=" px-2 mb-2 bg-gradient-to-r from-gray-900 via-slate-900 to-gray-900" >
      <div className='flex justify-center items-center p-2'>

</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 m-4 p-4" >


        <div className=" p-2 rounded-lg shadow-md relative h-auto w-full max-w-sm mx-auto" >
          <ReactPlayer loading="lazy" url={video} controls loop width={"100%"} className="w-full" />
          <div className="p-4">
            <h5 className="text-green-300 text-lg font-semibold">Music Library || FullStack</h5>
            <p className="text-slate-100 text-sm mt-2 max-w-sm m-2">Implementé un CRUD con React y NestJS. Los datos se consumen desde un archivo JSON en el frontend, mientras que en el backend usé NestJS para gestionar rutas, validaciones y lógica de negocio. Este proyecto me permitió profundizar en la interacción entre el frontend y el backend.</p>
            <a href="https://github.com/YessicaRomero/Api-con-Nestjs-React.git" className="bottom-4 left-4 right-4 text-center text-black-50 hover:bg-pink-500 font-semibold p-2 no-underline ">Codigo<GitHub /> </a>
          </div>
        </div>



        <div className=" p-2 rounded-lg shadow-md relative overflow-hidden w-full max-w-sm mx-auto" >
          <ReactPlayer url={video2} controls loop width={"100%"} className="w-full" />
          <div className="p-4">
            <h5 className="text-green-300 text-lg font-semibold">Trivia || FullStack</h5>
            <p className="text-slate-100 text-sm mt-2 max-w-sm m-2">Desarrollé un juego de trivia interactivo en equipo de manera remota.Participé en la interfaz, usando React, Bootstrap y FontAwesome. Además, implementamos autenticación segura con tokens web JSON y usamos Figma para el diseño colaborativo.Como base de datos Mysql y Nestjs para el backend
            </p>
            <a href="https://github.com/YessicaRomero/triviaFullSatck.git" className="bottom-4 left-4 right-4 text-center text-black-50 hover:bg-pink-500 font-semibold p-2 no-underline ">Codigo<GitHub /> </a>
          </div>
        </div>



        <div className=" p-2 rounded-lg shadow-md relative overflow-hidden w-full max-w-sm mx-auto" >
          <ReactPlayer url={Peluqueria} controls loop width={"100%"} className="w-full" />
          <div className="p-4">
            <h5 className="text-green-300 text-lg font-semibold">LandingPage Peluqueria || Front End </h5>
            <p className="text-slate-100 text-sm mt-2 max-w-sm m-2">
              Diseñé y desarrollé una landing page para una peluquería con React y Bootstrap. El objetivo era crear una interfaz atractiva y responsiva, aplicando las mejores prácticas de diseño web.</p>
            <a href="https://github.com/YessicaRomero/LandingPage" className="bottom-4 left-4 right-4 text-center text-black-50 hover:bg-pink-500 font-semibold p-2 no-underline ">Codigo <GitHub /></a>
          </div>
        </div>


        <div className=" p-2 rounded-lg shadow-md relative overflow-hidden w-full max-w-sm mx-auto" >
          <ReactPlayer url={movies} controls loop width={"100%"} className="w-full" />
          <div className="p-4">
            <h5 className="text-green-300 text-lg font-semibold">Movies || Front End</h5>
            <p className="text-slate-100 text-sm mt-2 max-w-sm m-2">
              Utilicé una API de películas para renderizar datos dinámicos en tiempo real. Usé React para gestionar el estado y el renderizado de los componentes, logrando una experiencia de usuario fluida y eficiente.</p>
            <a href="https://github.com/YessicaRomero/apiReact" className="bottom-4 left-4 right-4 text-center text-black-50 hover:bg-pink-500 font-semibold p-2 no-underline ">Codigo <GitHub /></a>

          </div>
        </div>



        <div className=" p-2 rounded-lg shadow-md relative overflow-hidden w-full max-w-sm mx-auto" >
          <ReactPlayer url={back} controls loop width={"100%"} className="w-full" />
          <div className="p-4">
            <h5 className="text-green-300 text-lg font-semibold">Trivia || Back end </h5>
            <p className="text-slate-100 text-sm mt-2 max-w-sm m-2">Como parte del desarrollo del backend del proyecto Trivia, diseñé y desarrollé entidades y DTO, integré una base de datos implementada en Oracle y apliqué medidas de seguridad como Helmet y Throttler. También configuré endpoints con validaciones y mejores prácticas. </p>
            <a href="https://github.com/YessicaRomero/triviaBack.git" className="bottom-4 left-4 right-4 text-center text-black-50 hover:bg-pink-500 font-semibold p-2 no-underline ">Codigo<GitHub /> </a>
          </div>
        </div>



      </div>


    </div>



  )
};
export default Project