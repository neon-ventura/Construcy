import ScrollToTop from '../../ScrollToTop'
import Footer from '../Footer/Footer'
import Nav from '../nav/Nav'
import styles from './About.module.css'

const About = () => {
    return (
        <>
            <Nav />
            <ScrollToTop />
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

                <div className={styles.about_informations}>
                    <h3 className={styles.about_h3}>
                        <hr className={styles.line} />
                        Relacionamento
                    </h3>
                    <p>
                        Destacamos o compromisso da nossa empresa em construir e manter relações sólidas e transparentes com nossos clientes, parceiros e colaboradores. Acreditamos que o sucesso de cada projeto é fruto de uma comunicação clara, respeito mútuo e confiança estabelecida ao longo do tempo. Nosso objetivo é criar laços duradouros que vão além da entrega de obras de qualidade, promovendo um ambiente de colaboração e crescimento conjunto.
                    </p>
                    <h3 className={styles.about_h3}>
                        <hr className={styles.line} />
                        Experiencia
                    </h3>
                    <p>
                        Nossa empresa tem uma vasta experiência no setor da construção, com anos de atuação que comprovam nossa expertise em projetos de diferentes escalas e complexidades. Ao longo do tempo, acumulamos um portfólio diversificado que reflete nossa capacidade de atender às necessidades específicas de cada cliente, sempre com um alto padrão de qualidade e eficiência. Nosso time é composto por profissionais qualificados e comprometidos, que utilizam as melhores práticas e tecnologias para garantir o sucesso de cada obra.                    </p>
                    <h3 className={styles.about_h3}>
                        <hr className={styles.line} />
                        Responsabilidade
                    </h3>
                    <p>
                        A responsabilidade é um dos pilares fundamentais da nossa atuação. Nos comprometemos a cumprir prazos, orçamentos e especificações técnicas com rigor, sempre respeitando as normas de segurança e sustentabilidade. Além disso, entendemos que nosso trabalho impacta a vida de muitas pessoas, por isso, priorizamos a ética e a transparência em todas as nossas ações. Nosso compromisso é entregar resultados que não apenas satisfaçam, mas superem as expectativas dos nossos clientes, sempre com responsabilidade social e ambiental.                    </p>
                </div>

                <div className={styles.about_ourMission}>
                    <p className={styles.p1}>Nossa Missão</p>
                    <h3 className={styles.h3}>Nosso objetivo é construir um mundo melhor</h3>
                    <p>
                        Nossa missão é transformar ideias em realidade, construindo espaços que atendam às necessidades e sonhos de nossos clientes, sempre com excelência, inovação e sustentabilidade. Buscamos criar valor em cada projeto, contribuindo para o desenvolvimento das comunidades onde atuamos e deixando um legado de qualidade e confiança. Nosso compromisso é ser referência no setor da construção, entregando obras que se destacam pela durabilidade, segurança e impacto positivo no ambiente e na sociedade.
                    </p>
                </div>
                <img className={styles.img} src="/about/img-2.webp" alt="" />
            </div>

            <Footer />

        </>
    )
}

export default About