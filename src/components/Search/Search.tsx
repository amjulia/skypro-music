'use client'
import React from 'react'
import styles from "./Search.module.css";
import { useAppDispatch } from '@/hooks/store';
import { setFilter } from '@/store/features/playlistSlice';
const Search = () => {
    const dispatch = useAppDispatch();
  return (
    <div className={styles.search}>
    <svg className={styles.search__svg}>
      <use xlinkHref="img/icon/sprite.svg#icon-search" />
    </svg>
    <input
      className={styles.search__text}
      type="search"
      placeholder="Поиск"
      name="search"
      onChange={(ev) => {
        dispatch(setFilter({ searchString: ev.target.value }));
      }}
    />
  </div>
  )
}

export default Search
