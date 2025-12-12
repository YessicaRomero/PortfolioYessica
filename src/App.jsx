import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/home'






function App() {


  return (

    <div className="bg-custom-gradient ">
      
        <Routes>
          <Route path="/" element={<Home />} />
          



        </Routes>
      
    </div>

  )
}

export default App
