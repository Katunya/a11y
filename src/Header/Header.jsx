import styles from "./Header.module.css";
import Image from 'next/image';
import logo from '../icons/logo.svg';
import user from '../icons/user.svg';
import search from '../icons/search.svg';

function Header () {
    return (
        <header className={styles.header}>
                <a href="#main" className={styles.skipLink}>Перейти к основному содержимому</a>
                <Image src={logo} alt="Логотип здания - музей имени А.С. Пушкина" role='presentation' width="200" height="42"/>
                    <div className={styles.containerHeader}>
                        <form action="/search" role="search">
                            <div className={styles.search} >
                                <input type="search" className={styles.searchInput}/>
                                <Image src={search} className={styles.logoSearch} alt="login" />
                            </div>
                        </form>
                        <nav className={styles.languageSwitch} aria-label="Поддерживаемые языки">
                            <span aria-current="true" aria-label="Русский">
                                <span aria-hidden="true">RU</span>
                            </span>
                            <a href="/en" hrefLang="en" aria-label="English" lang="en">EN</a>
                        </nav>
                        <button
                                type="button"
                                aria-label={'Логин'}
                                className={styles.buttonAuth}
                                aria-haspopup
                        >
                            <Image src={user} alt="login" aria-hidden />
                        </button>
                    </div>
        </header>
    )
}

export default Header
