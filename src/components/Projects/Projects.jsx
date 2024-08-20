import Nav from "../nav/Nav"
import styles from "./Projects.module.css"

const Projects = () => {
    return (
        <>
            <Nav />
            <div className={styles.content}>
                <p className={styles.p1}> Nossos Projetos</p>
            </div>
        </>
    )
}

export default Projects