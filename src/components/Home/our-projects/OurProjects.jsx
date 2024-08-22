import { Link } from 'react-router-dom'
import styles from './OurProjects.module.css'

const OurProjects = () => {
    return (
        <>
            <div className={styles.content}>
                <div className={styles.our_projects_text}>
                    <p className={styles.p1}>
                        O que Fazemos
                    </p>
                    <h3 className={styles.h3}>
                        Nossos Projetos
                    </h3>
                    <p className={styles.p2}>
                        Conheça nossos projetos mais recentes, que exemplificam qualidade, inovação e compromisso com os clientes. Confira as fotos abaixo e veja como transformamos ideias em realidade.
                    </p>
                    <Link to={'/projetos'}>
                        <div id="carouselExampleAutoplaying" className={`${styles.card} carousel slide`} data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img src="/projects/img-1.webp" className={`${styles.img} d-block w-100`} alt="..." />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h2>Angela Residence</h2>                                    
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img src="/projects/img-2.webp" className={`${styles.img} d-block w-100`} alt="..." />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h2>Sam Valley Highway</h2>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img src="/projects/img-3.webp" className={`${styles.img} d-block w-100`} alt="..." />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h2>Irving Industrial Region</h2>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img src="/projects/img-4.webp" className={`${styles.img} d-block w-100`} alt="..." />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h2>Mission Lake Bridge</h2>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img src="/projects/img-5.webp" className={`${styles.img} d-block w-100`} alt="..." />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h2>Halston Parkway</h2>
                                    </div>
                                </div>
                                <div class="carousel-item">
                                    <img src="/projects/img-6.webp" className={`${styles.img} d-block w-100`} alt="..." />
                                    <div class="carousel-caption d-none d-md-block">
                                        <h2>Sunnydale Apartment Complex</h2>
                                    </div>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </Link>
                    <hr className={styles.hr}/>
                </div>
            </div>
        </>
    )
}

export default OurProjects