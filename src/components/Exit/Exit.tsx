import React from "react";
import styles from "./Exit.module.css";

const Exit = () => {
  return (
    <div>
      <div className={styles.sidebar__personal}>
        <p className={styles.sidebar__personalName}>Sergey.Ivanov</p>
        <div className={styles.sidebar__icon}>
          <svg>
            <use xlinkHref="/img/icon/sprite.svg#logout" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Exit;
