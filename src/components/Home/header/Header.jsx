import { Link } from 'react-router-dom'
import styles from './Header.module.css'

const Header = () => {
    return (
        <>
            <header className={styles.header}>
                <video className={styles.video} src="/header/header-video.mp4" loop autoPlay muted></video>
                <div className={styles.content}>
                    <h1 className={styles.title}>Construindo um futuro Concreto</h1>
                    <div className={styles.desc}>
                        <h2 className={styles.desc_text}>Honestidade, Confiança</h2>
                        <h2 className={styles.desc_text}>Construtores desde 1968</h2>
                    </div>
                    <div className={styles.buttons}>
                        <Link to={'/'}> <button className={styles.btn_1}>Ver Projetos</button> </Link>
                        <Link to={'/'}> <button className={styles.btn_2}>Contate-nos</button> </Link>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header