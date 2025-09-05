import img from "../../assets/logo.svg"
import styles from "./logo.module.css"

function Logo() {
    return <div className={styles.logo}>
        <img src={img} alt="Memorize Logo" className={styles.logoImg}/>
        <h1 className={styles.logoText}>Memorize</h1>
    </div>
}

export default Logo;