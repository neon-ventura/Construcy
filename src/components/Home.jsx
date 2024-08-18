import Header from "./header/Header"
import Nav from "./nav/Nav"
import ReadMore from "./saiba-mais/ReadMore"
import ServicesDetails from "./serviços-detalhe/ServicesDetails"
import '../App.css'
import About from "./about/About"

const Home = () => {
    return (
        <>  
            <body>
                <Nav />
                <Header />
                <ReadMore />
                <ServicesDetails />
                <About />
            </body>
        </>
    )
}

export default Home