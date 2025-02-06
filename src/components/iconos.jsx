import js from '../assets/js.png'
import typescript from '../assets/typescript.png'
import nestjs from '../assets/nestjs.png'
import typeorm from '../assets/TypeORM.png'
import mysql from '../assets/mysql.png'
import jest from '../assets/jest.png'
import git from '../assets/git.png'
import github from '../assets/github.png'
import postman from '../assets/postman.png'
import scrum from '../assets/scrum.png'
import tailwind from '../assets/tailwind.png'



function Iconos() {
  return (

    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-2 xl:flex-row gap-4 my-4 '>


      <img loading="lazy" src={js} alt='logo de javascript' className='size-10 animate-pulse'/>
      <img loading="lazy" src={typescript} alt='logo de typescript' className='size-15 animate-pulse'/>
      <img loading="lazy" src={nestjs} alt='logo de nestjs' className='size-13 animate-pulse'/>
      <img loading="lazy" src={typeorm} alt='logo de typeorm' className='size-10 animate-pulse'/>
      <img loading="lazy" src={mysql} alt='logo de mysql' className='size-12 animate-pulse'/>
      <img loading="lazy" src={jest} alt='logo de Jest' className='size-10 animate-pulse'/>
      <img loading="lazy" src={git} alt='logo de Git' className='size-10 animate-pulse'/>
      <img loading="lazy" src={github} alt='logo de GitHub' className='size-10 animate-pulse'/>
      <img loading="lazy" src={postman} alt='logo de postman' className='size-10 animate-pulse'/>
      <img loading="lazy" src={scrum} alt='logo de scrum' className='size-10 animate-pulse'/>
      <img loading="lazy" src={tailwind} alt='logo de tailwind' className='size-12 animate-pulse'/>
    </div>
  )
}
export default Iconos