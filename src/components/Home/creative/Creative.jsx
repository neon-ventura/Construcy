import { FaRegBuilding } from "react-icons/fa";
import { CiHome , CiMap } from "react-icons/ci";
import { MdOutlineEngineering, MdOutlineWallpaper} from "react-icons/md";
import { RiBuilding2Line } from "react-icons/ri";
import { PiFireTruckThin } from "react-icons/pi";
import { GoGear } from "react-icons/go";
import styles from './Creative.module.css'
import { Link } from "react-router-dom";

const Creative = () => {
    return (
        <>
            <div className={styles.content}>
                <div className={styles.cardGroup}>
                    <Link className={styles.link} to={'/serviços'}>
                        <div className={styles.card}>
                            <FaRegBuilding className={styles.icon} size={70} />
                            <p className={styles.p}>Construção Comercial</p>
                        </div>
                    </Link>

                    <Link className={styles.link} to={'/serviços'}>
                    <div className={styles.card}>
                        <CiHome size={70} className={styles.icon}/>
                        <p className={styles.p}>Construção Residencial</p>
                    </div>
                    </Link>

                    <Link className={styles.link} to={'/serviços'}>
                    <div className={styles.card}>
                        <CiMap size={70} className={styles.icon}/>
                        <p className={styles.p}>Pré Construção</p>
                    </div>
                    </Link>

                    <Link className={styles.link} to={'/serviços'}>
                    <div className={styles.card}>
                        <MdOutlineEngineering size={70} className={styles.icon}/>
                        <p className={styles.p}>Gerenciamento</p>
                    </div>
                    </Link>


                </div>
                <div className={styles.cardGroup}>

                    
                    <Link className={styles.link} to={'/serviços'}>
                        <div className={styles.card}>
                            <RiBuilding2Line size={70} className={styles.icon}/>
                            <p className={styles.p}>Projetos Especiais</p>
                        </div>
                    </Link>

                    <Link className={styles.link} to={'/serviços'}>
                        <div className={styles.card}>
                            <PiFireTruckThin size={70} className={styles.icon}/>
                            <p className={styles.p}>Construção de Infraestrutura</p>
                        </div>
                    </Link>


                    <Link className={styles.link} to={'/serviços'}>
                        <div className={styles.card}>
                            <GoGear size={70} className={styles.icon}/>
                            <p className={styles.p}>Engenharia Civil</p>
                        </div>
                    </Link>


                    <Link className={styles.link} to={'/serviços'}>
                        <div className={styles.card}>
                            <MdOutlineWallpaper size={70} className={styles.icon}/>
                            <p className={styles.p}>Construção de Paisagens</p>
                        </div>
                    </Link>


                </div>
            </div>
        </>
    )
}

export default Creative