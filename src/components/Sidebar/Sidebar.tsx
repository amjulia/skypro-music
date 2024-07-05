import Image from "next/image";
import styles from "./Sidebar.module.css";
import Link from "next/link";

export const Sidebar = () => {
  return (
    <div className={styles.sidebar}>
    
      <div className={styles.sidebar__block}>
        <div className={styles.sidebar__list}>
           <div className={styles.sidebar__item}>
            <Link className={styles.sidebar__link} href="/tracks/category/1">
              <Image
                className={styles.sidebar__img}
                src="/img/playlist01.png"
                alt="day's playlist"
                width={250}
                height={150}
              />
            </Link>
          </div>
          <div className={styles.sidebar__item}>
            <Link className={styles.sidebar__link} href="/tracks/category/2">
              <Image
                className={styles.sidebar__img}
                src="/img/playlist02.png"
                alt="day's playlist"
                width={250}
                height={150}
              />
            </Link>
          </div>
          <div className={styles.sidebar__item}>
            <Link className={styles.sidebar__link} href="/tracks/category/3">
              <Image
                className={styles.sidebar__img}
                src="/img/playlist03.png"
                alt="day's playlist"
                width={250}
                height={150}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
