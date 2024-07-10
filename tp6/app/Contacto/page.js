import Subtitulo from "@/components/Subtitulo";
import Titulo from "@/components/Titulo";

export default function Contacto(){
    return(
        <>
            <Titulo texto="Contactanos!!"></Titulo>
            <Subtitulo texto="Informacion de contacto"></Subtitulo>
            <ul>
                <li>
                Direccion: Yatay 240
                </li>
                <li>
                Telefono: 4466-9988
                </li>
                <li>
                Correo electronico: Veterinaria@gmail.com
                </li>
                <li>
                Horarios de atención: Lunes a viernes de 8hs a 20hs, Sabados de 10hs a 18hs y Domingos cerrado
                </li>
            </ul>
        </>
    )
}