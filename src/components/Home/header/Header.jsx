import { Link } from 'react-router-dom'
import styles from './Header.module.css'
import { useEffect, useState } from 'react'

const Header = () => {

    const [srcPc, setSrcPc] = useState('/header/header-video.mp4')

    

    useEffect( () => {
        if (window.innerWidth > 769) {
            setSrcPc('/header/header-pc-video.mp4')
        }
    }, [])

    return (
        <>
            <header className={styles.header}>
                <video key={srcPc} className={styles.video} src={srcPc} loop autoPlay muted></video>
                <div className={styles.content}>
                    <h1 className={styles.title}>Construindo um futuro Concreto</h1>
                    <div className={styles.desc}>
                        <h2 className={styles.desc_text}>Honestidade, Confiança</h2>
                        <h2 className={styles.desc_text}>Construtores desde 1968</h2>
                    </div>
                    <div className={styles.buttons}>
                        <Link to={'/projetos'}> <button className={styles.btn_1}>Ver Projetos</button> </Link>
                        <Link to={'/contato'}> <button className={styles.btn_2}>Contate-nos</button> </Link>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header