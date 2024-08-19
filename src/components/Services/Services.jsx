import styles from './Services.module.css'
import Nav from '../nav/Nav.jsx'
import { FaRegBuilding } from 'react-icons/fa'
import Footer from '../Footer/Footer.jsx'
import { CiHome, CiMap } from 'react-icons/ci'
import { RiBuilding2Line } from 'react-icons/ri'
import { MdOutlineEngineering, MdOutlineWallpaper } from 'react-icons/md'
import { PiFireTruckThin } from 'react-icons/pi'
import { GoGear } from 'react-icons/go'

const Services = () => {
    return (
        <>
            <Nav />
            <div className={styles.content}>
                <div className={styles.services_header}>
                    <p className={styles.p1}>Nossos Serviços</p>
                    <h3 className={styles.h3}>Oferecemos uma gama de serviços para atender ás suas necessidades</h3>
                    <p className={styles.p2}>Na <strong>Construcy</strong>, oferecemos serviços completos de construção e reformas, garantindo qualidade e eficiência em cada projeto. Transformamos suas ideias em realidade, com foco em durabilidade e satisfação.</p>
                </div>

                <div className={styles.commercial}>
                    <FaRegBuilding className={styles.icon} size={70} />
                    <p className={styles.p}>Construção Comercial</p>
                    <p>Atuamos na transformação de espaços comerciais, criando ambientes modernos e funcionais que atendem às necessidades de diferentes tipos de negócios. Nosso foco é entregar soluções que agreguem valor e otimizem a operação de cada empreendimento.</p>
                </div>
                    <img className={styles.img} src="/services/img-1.webp" alt="" />


                <div className={styles.residential}>
                    <CiHome size={70} className={styles.icon} />
                    <p className={styles.p}>Construção Residencial</p>
                    <p>Dedicamo-nos a construir lares que combinam conforto, elegância e durabilidade. Cada projeto é realizado com atenção aos mínimos detalhes, utilizando materiais de alta qualidade para criar espaços que sejam verdadeiramente únicos.</p>
                </div>
                    <img className={styles.img} src="/services/img-2.webp" alt="" />


                <div className={styles.pre}>
                    <CiMap size={70} className={styles.icon} />
                    <p className={styles.p}>Pré Construção</p>
                    <p>Oferecemos um planejamento detalhado e preciso antes do início das obras, com orçamentos claros e cronogramas bem definidos. Isso garante que cada projeto seja executado de maneira eficiente, minimizando riscos e imprevistos.</p>
                </div>
                    <img className={styles.img} src="/services/img-3.webp" alt="" />


                <div className={styles.special}>
                    <RiBuilding2Line size={70} className={styles.icon} />
                    <p className={styles.p}>Projetos Especiais</p>
                    <p>Temos expertise na criação de soluções personalizadas para projetos que fogem do comum. Seja uma construção inovadora ou uma obra de grande complexidade, nossa equipe está pronta para superar desafios e entregar resultados excepcionais.</p>
                </div>
                    <img className={styles.img} src="/services/img-4.webp" alt="" />


                <div className={styles.site}>
                    <MdOutlineEngineering size={70} className={styles.icon} />
                    <p className={styles.p}>Gerenciamento</p>
                    <p>Nossa empresa oferece um serviço completo de gerenciamento de obras, cuidando de todas as etapas do processo. Com isso, asseguramos que o projeto seja concluído dentro do prazo, com qualidade e dentro do orçamento previsto.</p>
                </div>
                    <img className={styles.img} src="/services/img-5.webp" alt="" />


                <div className={styles.construction}>
                    <PiFireTruckThin size={70} className={styles.icon} />
                    <p className={styles.p}>Construção de Infraestrutura</p>
                    <p>Realizamos obras de infraestrutura que são fundamentais para o desenvolvimento de cidades e indústrias. Nossos projetos são feitos para durar, com foco em segurança, eficiência e sustentabilidade.</p>
                </div>
                    <img className={styles.img} src="/services/img-6.webp" alt="" />


                <div className={styles.civil}>
                    <GoGear size={70} className={styles.icon} />
                    <p className={styles.p}>Engenharia Civil</p>
                    <p>Nossa equipe de engenheiros civis está preparada para desenvolver e executar projetos que garantam a solidez e a funcionalidade de cada construção, sempre seguindo as melhores práticas do setor.</p>
                </div>
                    <img className={styles.img} src="/services/img-7.webp" alt="" />


                <div className={styles.landscape}>
                    <MdOutlineWallpaper size={70} className={styles.icon} />
                    <p className={styles.p}>Construção de Paisagens</p>
                    <p>Criamos paisagens que harmonizam com o ambiente natural e arquitetônico, valorizando cada espaço com projetos que promovem a sustentabilidade e o bem-estar.</p>
                </div>
                    <img className={styles.img} src="/services/img-1.webp" alt="" />

            </div>
            <Footer />
        </>
    )
}

export default Services