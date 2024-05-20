import Link from "next/link";
import styles from "./Menu.module.css";
import Image from "next/image";

export const Menu = () => {
  return (
    <nav className={styles.nav}>
      <div>
        <Image
          className={styles.logo__image}
          src="/img/logo.png"
          width={113}
          height={17}
          alt="logo"
        />
      </div>
      <div className={styles.nav__burger}>
        <span className={styles.burger__line} />
        <span className={styles.burger__line} />
        <span className={styles.burger__line} />
      </div>
      <div className={styles.nav__menu}>
        <ul className={styles.menu__list}>
          <li className={styles.menu__item}>
            <a href="#" className={styles.menu__link}>
              Главное
            </a>
          </li>
          <li className={styles.menu__item}>
            <a href="#" className={styles.menu__link}>
              Мой плейлист
            </a>
          </li>
          <li className={styles.menu__item}>
            <Link href="/signin" className={styles.menu__link}>
              Войти
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
