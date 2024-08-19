import { FaRegBuilding } from "react-icons/fa";
import { CiHome , CiMap } from "react-icons/ci";
import { MdOutlineEngineering, MdOutlineWallpaper} from "react-icons/md";
import { RiBuilding2Line } from "react-icons/ri";
import { PiFireTruckThin } from "react-icons/pi";
import { GoGear } from "react-icons/go";
import styles from './Creative.module.css'

const Creative = () => {
    return (
        <>
            <div className={styles.content}>
                <div className={styles.card}>
                    <FaRegBuilding size={70} />
                    <p className={styles.p}>Contrução Comercial</p>
                </div>
                <div className={styles.card}>
                    <CiHome size={70}/>
                    <p className={styles.p}>Contrução Residencial</p>
                </div>
                <div className={styles.card}>
                    <CiMap size={70}/>
                    <p className={styles.p}>Pré Construção</p>
                </div>
                <div className={styles.card}>
                    <MdOutlineEngineering size={70}/>
                    <p className={styles.p}>Gerenciamento</p>
                </div>
                <div className={styles.card}>
                    <RiBuilding2Line size={70} />
                    <p className={styles.p}>Projetos Especiais</p>
                </div>
                <div className={styles.card}>
                    <PiFireTruckThin size={70}/>
                    <p className={styles.p}>Construção de Infraestrutura</p>
                </div>
                <div className={styles.card}>
                    <GoGear size={70}/>
                    <p className={styles.p}>Engenharia Civil</p>
                </div>
                <div className={styles.card}>
                    <MdOutlineWallpaper size={70}/>
                    <p className={styles.p}>Contrução de Paisagens</p>
                </div>
            </div>
        </>
    )
}

export default Creative