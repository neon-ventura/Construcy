import { Link } from 'react-router-dom'
import styles from './ReadMore.module.css'

const ReadMore = () => {
    return (
        <>
            <div className={styles.content}>
                <div className={styles.text}>
                    <p className={styles.paragraph}>Construir é oque fazemos</p>
                    <h3 className={styles.h3}>Contrucy está liderando projetos de qualidade</h3>
                </div>
                <div>
                    <Link to={'/projetos'}> <button className={styles.btn}>Saiba-Mais</button> </Link>
                </div>
            </div>
        </>
    )
}

export default ReadMore
