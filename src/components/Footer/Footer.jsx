import { Link } from 'react-router-dom'
import styles from './Footer.module.css'

const Footer = () => {
    return (
        <>
            <div className={styles.content}>
                <div className={styles.informations}>
                    <div className={styles.logo_section}>
                        <h2 className={styles.logo}>Construcy</h2>
                    </div>
                    <div className={styles.local_section}>
                        <h3 className={styles.h3}>Local</h3>
                        <p>Rua 500 Terry Fracine</p>
                        <p>San Francisco, CA 94158</p>
                    </div>
                    <div className={styles.socials_section}>
                        <h3 className={styles.h3}>Redes Sociais</h3>
                        <Link to={'/'} className={styles.social_link}>Facebook</Link>
                        <Link to={'/'} className={styles.social_link}>Instagram</Link>
                        <Link to={'/'} className={styles.social_link}>WhatsApp</Link>
                    </div>
                    <div className={styles.inquiries_section}>
                        <h3 className={styles.h3}>Duvidas</h3>
                        <p>Para qualquer duvida ou elogios, por favor ligue: 123-456-7890</p>
                    </div>
                    <div>
                        <button className={styles.btn}>Contate-nos</button>
                    </div>
                    <div className={styles.copy}>
                        <p className={styles.copy_text}>© 2035 por Construcy.</p>
                        <p className={styles.copy_text}>Desenvolvido por <a className={styles.dev} href="https://api.whatsapp.com/send?phone=+55(33)98728-9728&text=Ol%C3%A1!">Neon Ventura</a></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer