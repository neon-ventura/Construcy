import Nav from '../nav/Nav'
import styles from './About.module.css'

const About = () => {
    return (
        <>
            <Nav />
            <div className={styles.content}>
                <div className={styles.about_header}>
                    <p className={styles.p1}>Sobre nós</p>
                    <h3 className={styles.h3}>Nós construimos para voçe</h3>
                </div>
                <img className={styles.img} src="/about/img-1.webp" alt="" />
                <div className={styles.about_text}>
                    <p className={styles.p2}>
                        Richard & Michael Construtores Associados
                    </p>
                    <p>
                        Richard & Michael é uma parceria estratégica formada por duas empresas de renome no setor da construção civil. Unindo forças, a Richard Construtora e a Michael Engenharia trouxeram ao mercado uma combinação de expertise, inovação e compromisso com a qualidade. Juntas, elas oferecem um portfólio abrangente de serviços que vai desde o planejamento e desenvolvimento de projetos até a execução e gestão de obras de grande porte.                    </p>
                    <p>
                        Essa associação permite que cada projeto seja abordado com uma visão multidisciplinar, integrando as melhores práticas e tecnologias disponíveis. O objetivo é garantir que cada empreendimento seja entregue dentro dos prazos estabelecidos, com a máxima eficiência e em conformidade com os mais altos padrões de qualidade. A união entre a Richard & Michael é a escolha certa para quem busca soluções completas e confiáveis em construção civil.                    </p>
                </div>
            </div>

        </>
    )
}

export default About