
import Nav from 'react-bootstrap/Nav';

import './nav.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';





function NavBar() {
return (
  <>
    <Nav fill variant="tabs" defaultActiveKey="/home" className='bg-bcd3cf relative flex border p-4  ' >
      <Nav.Item className='flex-1 mr-2 text-center  transition duration-500 ease-in-out  hover:bg-black-500 transform hover:-translate-y-1 hover:scale-110'>
        <Nav.Link href="https://www.linkedin.com/in/yessica-romero-dev/"><LinkedInIcon /> Linkedin</Nav.Link>
      </Nav.Item>
      <Nav.Item className='flex-1 mr-2 text-center transition duration-500 ease-in-out  hover:bg-black-500 transform hover:-translate-y-1 hover:scale-110 '>
        <Nav.Link href="https://github.com/YessicaRomero" ><GitHubIcon /> GitHub </Nav.Link>

      </Nav.Item>


    </Nav>

  </>
);
}

export default NavBar