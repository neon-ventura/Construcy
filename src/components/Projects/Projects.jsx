import Nav from "../nav/Nav"
import styles from "./Projects.module.css"
import Footer from './../Footer/Footer.jsx'
import { Link } from "react-router-dom"
import ScrollToTop from "../../ScrollToTop.jsx"

const Projects = () => {
    return (
        <>
            <Nav />
            <ScrollToTop />
            <div className={styles.content}>
                <p className={styles.p1}> Nossos Projetos</p>
                <h3 className={styles.h3}>
                    Construímos Projetos que Duram
                </h3>
                <p>
                    Na Construcy, nos orgulhamos de construir projetos que duram. Combinamos expertise técnica, materiais de alta qualidade e uma abordagem centrada no cliente para garantir que cada obra seja sólida, funcional e esteticamente impecável. Nosso compromisso é entregar soluções de construção que resistam ao tempo, refletindo a confiança e o cuidado com que cada detalhe é planejado e executado. Na Construcy, não construímos apenas edifícios, construímos o futuro.
                </p>
                <div className={styles.projects}>
                    <Link className={styles.a} to={'/projetos/1'}>
                        <img src="/projects/img-1.webp" className={styles.img}></img>
                        <p className={styles.p2}>Angela Residence</p>
                    </Link>

                    <Link className={styles.a} to={'/projetos/2'}>
                    <img src="/projects/img-2.webp" className={styles.img}></img>
                    <p className={styles.p2}>Sam Valley Highway</p>
                    </Link>
                    
                    <Link className={styles.a} to={'/projetos/3'}>
                    <img src="/projects/img-3.webp" className={styles.img}></img>
                    <p className={styles.p2}>Irving Industrial Region</p>
                    </Link>

                    <Link className={styles.a} to={'/projetos/4'}>
                    <img src="/projects/img-4.webp" className={styles.img}></img>
                    <p className={styles.p2}>Mission Lake Bridge</p>
                    </Link>

                    <Link className={styles.a} to={'/projetos/5'}>
                    <img src="/projects/img-5.webp" className={styles.img}></img>
                    <p className={styles.p2}>Halston Parkway</p>
                    </Link>
                </div>

                <Footer />
            </div>
        </>
    )
}

export default Projects