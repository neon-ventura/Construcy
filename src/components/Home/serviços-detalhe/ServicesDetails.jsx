import styles from './ServicesDetails.module.css'

const ServicesDetails = () => {
    return(
        <>
            <div className={styles.content}>
                <div className={styles.img1}></div>
                <div className={styles.services_text}>
                    <h3 className={styles.h3}>Comercial</h3>
                    <p>Nossa construtora se destaca na área comercial, transformando ideias em realidade com precisão e atenção aos detalhes. Trabalhamos em estreita colaboração com nossos clientes para criar ambientes funcionais e esteticamente agradáveis que refletem a identidade da marca. Com uma equipe experiente, entregamos projetos comerciais que impulsionam negócios e concretizam visões de sucesso.</p>
                </div>
                <div className={styles.img2}></div>
                <div className={styles.services_text}>
                    <h3 className={styles.h3}>Infraestrutura</h3>
                    <p>Com expertise em infraestrutura, nossa construtora lida com projetos de grande escala, desde rodovias até sistemas de saneamento. Nos comprometemos a entregar soluções que atendam às demandas atuais e futuras, utilizando as mais recentes tecnologias para garantir a durabilidade e a sustentabilidade dos projetos.</p>
                </div>
                <div className={styles.img3}></div>
                <div className={styles.services_text}>
                    <h3 className={styles.h3}>Residencial</h3>
                    <div className={styles.img4}></div>
                    <p className={styles.p}>No segmento residencial, construímos mais que casas, criamos lares. Combinando design moderno e funcionalidade, nossos projetos residenciais são planejados com atenção aos detalhes, priorizando conforto e qualidade. Cada residência reflete nosso compromisso com a excelência e a satisfação do cliente.</p>
                </div>
            </div>
        </>
    )
}

export default ServicesDetails