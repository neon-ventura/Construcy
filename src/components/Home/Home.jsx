import Header from "./header/Header"
import Nav from "./nav/Nav"
import ReadMore from "./saiba-mais/ReadMore"
import ServicesDetails from "./serviços-detalhe/ServicesDetails"
import '../../App.css'
import About from "./about/About"
import OurServices from "./our-services/OurServices"
import Creative from "./creative/Creative"
import OurProjects from "./our-projects/OurProjects"
import Footer from "../Footer/Footer"

const Home = () => {
    return (
        <>  
            <body>
                <Nav />
                <Header />
                <ReadMore />
                <ServicesDetails />
                <About />
                <OurServices />
                <Creative />
                <OurProjects />
                <Footer />
            </body>
        </>
    )
}

export default Home