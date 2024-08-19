import styles from './About.module.css'

const About = () => {
    return(
        <>
            <div className={styles.content}>
                <div className={styles.about_text}>
                    <p className={styles.about_p1}>Quem Somos</p>
                    <h3 className={styles.about_h3}>Sobre nossa Empresa</h3>
                    <p className={styles.about_p2}>A Contrucy é especializada em construção, oferecendo serviços de alta qualidade para reformas e grandes projetos. Nossa equipe garante segurança, cumprimento de prazos e a satisfação dos clientes em cada etapa do processo.</p>
                </div>
                <div className={styles.data}>
                    <div className={styles.data_text}>
                        <h3 className={styles.h3}>1968</h3>
                        <p className={styles.data_p}>Ano de Estabelecimento</p>
                        <p className={styles.line}>----------</p>
                    </div>
                    <div className={styles.data_text}>
                        <h3 className={styles.h3}>282</h3>
                        <p className={styles.data_p}>Projetos Feitos</p>
                        <p className={styles.line}>----------</p>
                    </div>
                    <div className={styles.data_text}>
                        <h3 className={styles.h3}>150</h3>
                        <p className={styles.data_p}>Funcionários Profissionais</p>
                        <p className={styles.line}>----------</p>
                    </div>
                    <div className={styles.data_text}>
                        <h3 className={styles.h3}>35</h3>
                        <p className={styles.data_p}>Parceiros de Negócios</p>
                        <p className={styles.line}>----------</p>
                    </div>
                </div>
                <div className={styles.signature_section}>
                    <img className={styles.signature_img} src="/data-images/assinatura.png" alt="" />
                    <p className={styles.signature}>Gabriel Oliveira</p>
                </div>
            </div>
        </>
    )
}

export default About