import Row from '@mui/icons-material/KeyboardDoubleArrowDown';
import { motion } from 'framer-motion';
import Animation from "../components/animation";
import ButtonDownload from '../components/botondownload';
import Iconos from "../components/iconos";
import Info from "../components/info";
import Invitation from "../components/invitation";
import Message from "../components/message";
import NavBar from "../components/nav";
import Welcome from "../components/presentation";
import Project from "../components/projects";
import Skills from "../components/skills";


function Home() {

    return (
        <div
            className="bg-custom-gradient  w-full  ">
            <NavBar />
            <div className="bg-[url(/fondoHome.png)] bg-center bg-no-repeat bg-cover   w-full hover:bg-opacity-90">
                <div className="bg-black bg-opacity-30  w-full flex flex-col justify-center items-center">
                    <Iconos />
                    <Welcome />
                    <Skills />
                    <p className="text-neutral-200 text-center animate-ping text-xl"><Row /></p>
                </div>

            </div>
            <div className="flex flex-col md:flex-col xl:flex-col justify-center items-center gap-2 p-4 m-4 ">

                <Message />
                <ButtonDownload />
            </div>
            <motion.div
                className="flex flex-wrap flex-col md:flex-row xl:flex-row justify-center items-center gap-4 p-6 m-6 "
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}>
                <Animation />

                <Invitation />
                <Info />


            </motion.div>
            <Project />

        </div>
    );

};
export default Home