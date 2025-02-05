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

    <div className='animate-slidein300 opacity-0 [--slidein-delay:300ms] flex flex-end justify-center lg:justify-content gap-4  my-8  opacity-50'>


      <img loading="lazy" src={js} alt='logo de javascript' className='size-10'/>
      <img loading="lazy" src={typescript} alt='logo de typescript' className='size-15'/>
      <img loading="lazy" src={nestjs} alt='logo de nestjs' className='size-13'/>
      <img loading="lazy" src={typeorm} alt='logo de typeorm' className='size-10'/>
      <img loading="lazy" src={mysql} alt='logo de mysql' className='size-12'/>
      <img loading="lazy" src={jest} alt='logo de Jest' className='size-10'/>
      <img loading="lazy" src={git} alt='logo de Git' className='size-10'/>
      <img loading="lazy" src={github} alt='logo de GitHub' className='size-10'/>
      <img loading="lazy" src={postman} alt='logo de postman' className='size-10'/>
      <img loading="lazy" src={scrum} alt='logo de scrum' className='size-10'/>
      <img loading="lazy" src={tailwind} alt='logo de tailwind' className='size-12'/>
    </div>
  )
}
export default Iconos