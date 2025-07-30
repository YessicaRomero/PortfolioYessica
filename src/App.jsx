import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/home'
import Projects from './pages/projects'





function App() {


  return (

    <div className="bg-custom-gradient ">
      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />



        </Routes>
      
    </div>

  )
}

export default App
