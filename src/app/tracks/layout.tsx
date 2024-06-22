import { Menu } from "@/components/Menu/Menu";
import styles from "./layout.module.css";
import { Sidebar } from "@/components/Sidebar/Sidebar";
import { Player } from "@/components/Player/Player";
import Search from "@/components/Search/Search";
import Header from "@/components/Header/Header";
export default function TracksLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          {children}
          {/* <Sidebar /> */}
        </main>
        <Player />
        <footer className={styles.footer} />
      </div>
    </div>
  );
}
