import Iconos from "../components/iconos";
import Message from "../components/message";
import NavBar from "../components/nav";
import Welcome from "../components/presentation";
import Skills from "../components/skills";
import { motion } from "framer-motion";
import ButtonDownload from '../components/botondownload';
import Invitation from "../components/invitation";
import Info from "../components/info";
import { useNavigate } from "react-router-dom";
import Row from '@mui/icons-material/KeyboardDoubleArrowDown';



function Home() {
  const navigate  = useNavigate();

  const HandleClick = () =>{
    navigate("/projects")
}
    const fadeIn = {
        hidden: {opacity: 0,  y:50},
        visible: {opacity: 1, y:0, transition: {duration: 0.8}},
      }
    return(
        <motion.div
        className="bg-custom-gradient   transition duration-500 ease-in-out transform hover:scale-105 w-full overflow-hidden "
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
      >
            <NavBar />
            <div className="bg-[url(/fondoHome.png)] bg-center bg-no-repeat bg-cover  min-h-screen w-full hover:bg-opacity-90">
            <div className="bg-black bg-opacity-50 min-h-screen w-full flex flex-col justify-center items-center">
            <Iconos />
            <Welcome />
            <Skills />
            <p className= "text-neutral-200 text-center animate-ping text-xl"><Row /></p>
            </div>
            
            </div>
            <motion.div className="flex flex-col md:flex-col xl:flex-col justify-center items-center gap-2 p-4 m-4">
          
            <Message /> 
             <ButtonDownload />
            </motion.div>
            <motion.div 
            className="flex flex-col md:flex-row xl:flex-row justify-center items-center gap-4 p-6 m-6"
            initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn} >
            <Invitation />
            <motion.button
  type="button"
  onClick={HandleClick}
  className="relative gap-4 justify-center  overflow-hidden text-pink-500 font-bold py-3 px-6 border-2 border-pink-500 rounded-lg transition duration-500 ease-in-out hover:bg-pink-500 hover:text-black shadow-neon-pink hover:shadow-neon-pink md:w-[250px] lg:w-[400px]"
>
  <span className="absolute top-0 left-0 w-full h-[2px] bg-gradient-to-r from-transparent to-pink-500 animate-line1"></span>
  <span className="absolute top-0 right-0 w-[2px] h-full bg-gradient-to-b from-transparent to-pink-500 animate-line2"></span>
  <span className="absolute bottom-0 right-0 w-full h-[2px] bg-gradient-to-l from-transparent to-pink-500 animate-line3"></span>
  <span className="absolute bottom-0 left-0 w-[2px] h-full bg-gradient-to-t from-transparent to-pink-500 animate-line4"></span>
 Projects
</motion.button>

            <Info />
            </motion.div>
        </motion.div>
    )
    
}
export default Home