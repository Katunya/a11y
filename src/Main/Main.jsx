import Header from "../Header/Header";
import styles from "./Main.module.css";
import Navigation from "../Navigation/Navigation";

function Main () {
    return (
        <div className={styles.wrapper}>
            <Header/>
            <main id="main">
                <Navigation />

            </main>
        </div>
    )
}

export default Main
