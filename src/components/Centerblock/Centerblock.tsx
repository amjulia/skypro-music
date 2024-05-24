import cn from "classnames";
import styles from "./Centerblock.module.css";
import { Filters } from "../Filters/Filters";
import { getTracks } from "@/api/track";
import { TrackType } from "@/types/types";


export const Centerblock = async () => {
  
  const tracks: TrackType[] = await getTracks();
 const uniqueAuthors = Array.from(new Set(tracks.map((track) => track.author)));
const uniqueGenre = Array.from(new Set(tracks.map((track) => track.genre)));

  return (
    <div className={styles.centerblock}>
      <div className={styles.search}>
        <svg className={styles.search__svg}>
          <use xlinkHref="img/icon/sprite.svg#icon-search" />
        </svg>
        <input
          className={styles.search__text}
          type="search"
          placeholder="Поиск"
          name="search"
        />
      </div>
      <h2 className={styles.heading}>Треки</h2>

      <Filters uniqueAuthors={uniqueAuthors} uniqueGenre={uniqueGenre}/>
      <div className={styles.content}>
        <div className={styles.content__title}>
          <div className={cn(styles.playlistTitle__col, styles.col01)}>
            Трек
          </div>
          <div className={cn(styles.playlistTitle__col, styles.col02)}>
            Исполнитель
          </div>
          <div className={cn(styles.playlistTitle__col, styles.col03)}>
            Альбом
          </div>
          <div className={cn(styles.playlistTitle__col, styles.col04)}>
            <svg className={styles.playlistTitle__svg}>
              <use xlinkHref="img/icon/sprite.svg#icon-watch" />
            </svg>
          </div>
        </div>
        <div className={styles.content__playlist}>
          {tracks.map((value, index: number) => {
            return (
              <div className={styles.playlist__item} key={index}>
                <div className={styles.playlist__track}>
                  <div className={styles.track__title}>
                    <div className={styles.track__titleImage}>
                      <svg className={styles.track__titleSvg}>
                        <use xlinkHref="img/icon/sprite.svg#icon-note" />
                      </svg>
                    </div>
                    <div className={styles.track__titleText}>
                      <a className={styles.track__titleLink} href="http://">
                        {value.name} <span className={styles.track__titleSpan} />
                      </a>
                    </div>
                  </div>
                  <div className={styles.track__author}>
                    <a className={styles.track__authorLink} href="http://">
                      {value.author}
                    </a>
                  </div>
                  <div className={styles.track__album}>
                    <a className={styles.track__albumLink} href="http://">
                     {value.album}
                    </a>
                  </div>
                  <div className={styles.track__time}>
                    <svg className={styles.track__timeSvg}>
                      <use xlinkHref="img/icon/sprite.svg#icon-like" />
                    </svg>
                    <span className={styles.track__timeText}>{value.duration_in_seconds}</span>
                  </div>
                </div>
              </div>
            );
          })}

        </div>
      </div>
    </div>
  );
};
