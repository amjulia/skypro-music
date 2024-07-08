"use client";
import { Centerblock } from "@/components/Centerblock/Centerblock";
import { useAppDispatch, useAppSelector } from "@/hooks/store";
import React, { useEffect } from "react";
import styles from "./page.module.css";
import { setPlaylist } from "@/store/features/playlistSlice";
import Link from "next/link";

export default function FavoriteTrackPage() {
  const dispatch = useAppDispatch();
  const logged = useAppSelector((state) => state.auth.tokens.access);
  const tracks = useAppSelector((state) => state.playlist.likedTracks);
  useEffect(() => {
    dispatch(setPlaylist({ tracks: tracks })), console.log(tracks);
  }, [dispatch, tracks]);

  return (
    <div className={styles.mainCenterblock}>
      {logged ? (
        <>
          <h2 className={styles.centerblockH2}>Мой плейлист</h2>{" "}
          <Centerblock tracks={tracks} />{" "}
        </>
      ) : (
        <Link href={"/signin"} className={styles.link}>
          Необходимо авторизоваться
        </Link>
      )}
    </div>
  );
}
