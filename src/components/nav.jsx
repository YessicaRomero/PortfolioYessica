import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './nav.css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';





function NavBar() {
  return (
    <>
      <Nav fill variant="tabs" defaultActiveKey="/home" className='bg-bcd3cf' >
        <Nav.Item>
          <Nav.Link href="https://www.linkedin.com/in/yessica-romero-dev/"><LinkedInIcon /> Linkedin</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="https://github.com/YessicaRomero" ><GitHubIcon /> GitHub </Nav.Link>

        </Nav.Item>


      </Nav>

    </>
  );
}

export default NavBar