import styles from './Nav.module.css'

const Nav = () => {
    return (
        <>
            <nav className={`${styles.nav} navbar navbar-dark fixed-top`}>
                <div className={`${styles.container} container-fluid`}>
                    <a className={`${styles.title} navbar-brand`} href="/">Construcy</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasDarkNavbar" aria-controls="offcanvasDarkNavbar" aria-label="Toggle navigation">
                        <span className={`${styles.toggle} navbar-toggler-icon`}></span>
                    </button>
                    <div className="offcanvas offcanvas-end text-bg-dark" tabIndex="-1" id="offcanvasDarkNavbar" aria-labelledby="offcanvasDarkNavbarLabel">
                        <div className={`${styles.offcanvas_header} offcanvas-header`}>
                            <h5 className={`${styles.offcanvas_title} offcanvas-title`} id="offcanvasDarkNavbarLabel">Construcy</h5>
                            <button type="button" className={`${styles.btn_close} btn-close`} data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className={`${styles.offcanvas_body} offcanvas-body`}>
                            <ul className={`${styles.nav_ul} navbar-nav justify-content-end flex-grow-1 pe-1`}>
                                <li className="nav-item">
                                    <a className={`${styles.nav_link} nav-link`} href="/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className={`${styles.nav_link} nav-link`} href="/services">Serviços</a>
                                </li>
                                <li className="nav-item">
                                    <a className={`${styles.nav_link} nav-link`} href="#">Projetos</a>
                                </li>
                                <li className="nav-item">
                                    <a className={`${styles.nav_link} nav-link`} href="#">Sobre Nós</a>
                                </li>
                                <li className="nav-item">
                                    <a className={`${styles.nav_link} nav-link`} href="#">Contato</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav