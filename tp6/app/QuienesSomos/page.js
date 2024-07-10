import Titulo from "@/components/Titulo";
import styles from './page.module.css'
export default function QuienesSomos(){
    return(
        <>
        <div className = {styles.QuienesSomos}>
        <Titulo texto="¡Bienvenidos a nuestro mundo dedicado al cuidado veterinario!"></Titulo>
        <h3 className={styles.contenido}>Nos dedicamos apasionadamente al bienestar de tus mascotas. Nuestra misión es proporcionar atención veterinaria de la más alta calidad con un enfoque cálido y personalizado. Creemos que cada mascota merece ser tratada con amor, respeto y profesionalismo.</h3>
        </div>
        </>
    )
}