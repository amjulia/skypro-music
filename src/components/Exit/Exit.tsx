"use client";
import React from "react";
import styles from "./Exit.module.css";
import { useInitializeLikedTracks } from "@/hooks/likes";
import { useAppDispatch, useAppSelector } from "@/hooks/store";
import { logout } from "@/store/features/authSlice";

const Exit = () => {
  const dispatch = useAppDispatch();
  useInitializeLikedTracks();
  const userName = useAppSelector((state) => state.auth.user?.username);
  const auth = useAppSelector((state) => state.auth.user);
  if (!userName) {
    return null;
  }
  const exitLogout = () => {
    dispatch(logout())
  };
  return (
    <div>
      <div className={styles.sidebar__personal}>
        <p className={styles.sidebar__personalName}>{userName}</p>
        <div className={styles.sidebar__icon} onClick={exitLogout}>
          <svg>
            <use xlinkHref="/img/icon/sprite.svg#logout" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Exit;
