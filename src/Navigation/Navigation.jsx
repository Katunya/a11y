import styles from "./Navigation.module.css";

function Navigation () {
    return (
            <nav className={styles.navList}>
                <ul aria-label="Основные разделы">
                    <li><a href="#museum">Музей</a></li>
                    <li><a href="#visitors">Посетителям</a></li>
                    <li><a href="#events">Выставки и события</a></li>
                </ul>
            </nav>
    )
}

export default Navigation
