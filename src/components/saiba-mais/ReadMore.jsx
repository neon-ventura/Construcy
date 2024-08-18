import { Link } from 'react-router-dom'
import styles from './ReadMore.module.css'

const ReadMore = () => {
    return (
        <>
            <div className={styles.content}>
                <p className={styles.paragraph}>Contruir é oque fazemos</p>
                <h3 className={styles.h3}>Contrucy está liderando projetos de qualidade</h3>
                <Link to={'/'}> <button className={styles.btn}>Saiba-Mais</button> </Link>
            </div>
        </>
    )
}

export default ReadMore
