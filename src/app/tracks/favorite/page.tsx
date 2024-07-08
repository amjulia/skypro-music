"use client";
import { Centerblock } from "@/components/Centerblock/Centerblock";
import { useAppDispatch, useAppSelector } from "@/hooks/store";
import React, { useEffect } from "react";
import styles from "./page.module.css";
import { setPlaylist } from "@/store/features/playlistSlice";


export default function FavoriteTrackPage() {
  const dispatch = useAppDispatch();
  const tracks = useAppSelector((state) => state.playlist.likedTracks);
  useEffect(()=> {dispatch(setPlaylist({tracks:tracks})), console.log(tracks)},[dispatch,tracks])
 
  return (
    <div className={styles.mainCenterblock}>
      <h2 className={styles.centerblockH2}>Мой плейлист</h2>{" "}
      <Centerblock tracks={tracks} />{" "}
    </div>
  );
}
