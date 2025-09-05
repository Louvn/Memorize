import styles from "./footer.module.css"

function Footer() {
    return <footer className={styles.footer}>
        <span>
            Memorize: The Notes-App by <a href="https://github.com/Louvn" target="_blank">Louvn</a>
        </span>
        <span className={styles.info}>Notes are stored in localStorage.</span>
    </footer>
}

export default Footer;