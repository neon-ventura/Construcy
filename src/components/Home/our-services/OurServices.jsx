import { Link } from 'react-router-dom'
import styles from './OurServices.module.css'

const OurServices = () => {
    return(
        <>
            <div className={styles.content}>
                <p className={styles.p1}>Nossos Serviços</p>
                <h3 className={styles.h3}>Oferecemos uma gama de serviços para atender ás suas necessidades</h3>
                <p className={styles.p2}>Na <strong>Construcy</strong>, oferecemos serviços completos de construção e reformas, garantindo qualidade e eficiência em cada projeto. Transformamos suas ideias em realidade, com foco em durabilidade e satisfação.</p>
                <Link to={'/services'}> <button className={styles.btn}>Saiba Mais</button> </Link>
            </div>
        </>
    )
}

export default OurServices