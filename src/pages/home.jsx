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
import Project from "../components/projects";



function Home() {

    const fadeIn = {
        hidden: {opacity: 0},
        visible: {opacity: 1, y:0, transition: {duration: 0.6}},
      }
    return(
        <motion.div
        className="bg-custom-gradient   transition duration-600 ease-in-out transform hover:scale-105 w-full overflow-hidden "
        
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
          

            <Info />
            </motion.div>
            <Project />
        </motion.div>
    )
    
}
export default Home