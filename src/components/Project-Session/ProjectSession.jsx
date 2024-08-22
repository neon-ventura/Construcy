import { Link } from 'react-router-dom';
import styles from './ProjectSession.module.css'
import { FaArrowLeft } from "react-icons/fa6";

const ProjectSession = ({ img, txt, h3 }) => {
    return (
        <>
            <Link to={'/projetos'}>
                <FaArrowLeft className={styles.btn} size={40} />
            </Link>
            <div className={styles.content}>
                <img className={styles.img} src={img} alt="" />
                <div className={styles.text}>
                    <h3 className={styles.h3}>
                        {h3}
                    </h3>
                    <p className={styles.p} >{txt}</p>
                </div>
            </div>
        </>
    )
}

export default ProjectSession