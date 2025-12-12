import Project from "../components/projects"
import { motion } from "framer-motion";
import { useEffect } from "react";




function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);


  const fadeIn = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  }
  return (
    <motion.div className='bg-custom-gradient  transition duration-500 ease-in-out transform hover:scale-105 scroll-smooth overflow-hidden '
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeIn}>
      <Project />
    </motion.div>
  )
}
export default Projects
