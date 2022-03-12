import styles from '../styles/Home.module.css'

function Main () {
    return (
        <div>
            <a href="#main" className={styles.SkipLink}>{t('skipLink', lang)}</a>

        </div>
    )
}

export default Main
