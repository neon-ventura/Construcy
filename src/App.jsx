import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/Home/Home.jsx'
import Services from './components/Services/Services.jsx'
import Contact from './components/Contact/Contact.jsx'
import About from './components/About/About.jsx'
import ScrollToTop from './ScrollToTop.jsx'
import Projects from './components/Projects/Projects.jsx'
import ProjectSession from './components/Project-Session/ProjectSession.jsx'
function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/serviços' element={<Services />} />
          <Route path='/contato' element={<Contact />} />
          <Route path='/sobre' element={<About />} />
          <Route path='/projetos' element={<Projects />} />

          {/* ---------- */}

          <Route path='/projetos/1' element={<ProjectSession h3={'Angela Residence'} img={"/projects/img-1.webp"} txt={"Construir a Angela Residence foi uma jornada marcada por detalhes e precisão. Localizada em uma área privilegiada, cada elemento foi cuidadosamente planejado para criar um espaço que fosse ao mesmo tempo elegante e acolhedor. Desde a escolha dos materiais até a execução final, garantimos que o resultado refletisse o desejo do cliente por uma casa que combinasse luxo e durabilidade"}/>} />
          <Route path='/projetos/2' element={<ProjectSession h3={'Sam Valley Highway'} img={"/projects/img-2.webp"} txt={'O projeto da Sam Valley Highway foi um desafio de engenharia que abraçamos com entusiasmo. Com o objetivo de melhorar a infraestrutura local, focamos em criar uma estrada segura, durável e capaz de suportar o tráfego intenso. Utilizamos tecnologias de ponta para garantir que cada quilômetro entregue fosse um símbolo de inovação e resistência.'} />} />
          <Route path='/projetos/3' element={<ProjectSession h3={'Irving Industrial Region'} img={"/projects/img-3.webp"} txt={'Desenvolver a Irving Industrial Region foi uma oportunidade de transformar uma área estratégica em um polo industrial de alta performance. O projeto exigiu planejamento meticuloso para atender às demandas específicas de diversas indústrias. Cada instalação foi construída com um foco especial em eficiência, sustentabilidade e capacidade de expansão futura.'} />} />
          <Route path='/projetos/4' element={<ProjectSession h3={'Mission Lake Bridge'} img={"/projects/img-4.webp"} txt={' A construção da Mission Lake Bridge foi uma obra de arte em engenharia. Trabalhar em um ambiente natural tão deslumbrante exigiu um equilíbrio entre robustez e estética. Criamos uma ponte que não só facilita o transporte, mas também se integra harmoniosamente ao entorno, tornando-se um novo marco na paisagem.'} />} />
          <Route path='/projetos/5' element={<ProjectSession h3={'Halston Parkway'} img={"/projects/img-5.webp"} txt={'O projeto do Halston Parkway foi uma empreitada ambiciosa que combinou nossa experiência em infraestrutura com um compromisso com o desenvolvimento sustentável. Construir essa rodovia envolveu superar desafios geotécnicos e logísticos, mas o resultado foi uma via moderna, segura e essencial para o crescimento econômico da região.'} />} />
          <Route path='/projetos/6' element={<ProjectSession h3={'Sunnydale Apartment Complex'} img={"/projects/img-6.webp"} txt={'O projeto do Halston Parkway foi uma empreitada ambiciosa que combinou nossa experiência em infraestrutura com um compromisso com o desenvolvimento sustentável. Construir essa rodovia envolveu superar desafios geotécnicos e logísticos, mas o resultado foi uma via moderna, segura e essencial para o crescimento econômico da região.'} />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
