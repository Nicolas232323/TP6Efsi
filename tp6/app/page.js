import Image from "next/image";
import styles from "./page.module.css";
import Titulo from "@/components/Titulo";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
       <Titulo texto="¡Bienvenidos a nuestro mundo dedicado al cuidado veterinario!"></Titulo>
      </div>
    </main>
  );
}
