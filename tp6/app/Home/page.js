import { Main } from 'next/document';
import './page.module.css'
import Titulo from '@/components/Titulo';

export default function Home(){
    return(
        <main>
            <div>
                <Titulo texto="¡Bienvenidos a nuestro mundo dedicado al cuidado veterinario!"></Titulo>
            </div>
        </main>
    );
};