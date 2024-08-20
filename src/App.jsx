import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home.jsx'
import Services from './components/Services/Services.jsx'
import Contact from './components/Contact/Contact.jsx'
import About from './components/About/About.jsx'
import ScrollToTop from './ScrollToTop.jsx'
import Projects from './components/Projects/Projects.jsx'
function App() {

  return (
    <>
      <BrowserRouter>
          <ScrollToTop />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/serviços' element={<Services />} />
          <Route path='/contato' element={<Contact />} />
          <Route path='/sobre' element={<About />} />
          <Route path='/projetos' element={<Projects />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
