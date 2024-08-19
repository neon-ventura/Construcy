import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home.jsx'
import Services from './components/Services/Services.jsx'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/services' element={<Services />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
