"use client";
import { fetchFavoriteTracks } from "@/api/track";
import { Centerblock } from "@/components/Centerblock/Centerblock";
import { useAppDispatch, useAppSelector } from "@/hooks/store";
import { setPlaylist } from "@/store/features/playlistSlice";
import React, { useEffect } from "react";
import styles from "./page.module.css";

export default function FavoriteTrackPage() {
  const tracks = useAppSelector((state) => state.playlist.likedTracks);
  // const tracks = useAppSelector((store) => store.playlist.playlist);
  // const access = useAppSelector((store) => store.auth.tokens.access);
  // const dispatch = useAppDispatch();
  // useEffect(() => {
  //   fetchFavoriteTracks(access)
  //     .then((response) => {
  //       dispatch(setPlaylist({ tracks: response.item }));
  //     })
  //     .catch((err) => {
  //       console.log(err.message);
  //     });
  // }, [access, dispatch]);
  return (
    <div className={styles.mainCenterblock}>
      <h2 className={styles.centerblockH2}>Мой плейлист</h2>
      <Centerblock tracks={tracks} />
    </div>
    
    
   
  )
  
}
