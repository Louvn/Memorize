import {Link} from "react-router-dom"

import styles from "./navbar.module.css"
import Logo from "../Logo"

function Navbar() {
    return <nav className={styles.navbar}>
        <Link to="/">
            <Logo />
        </Link>
    </nav>;
}

export default Navbar;