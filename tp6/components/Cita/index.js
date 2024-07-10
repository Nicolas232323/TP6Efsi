import React  from "react";
import './Cita.css';
import Button from "../Button";
import { useState } from "react";
const Cita = ({nombreMascota, nombreDueño , Fecha , Hora , Sintomas , setCitas , citas , id }) => {
    const eliminar = () => {
        if (window.confirm("Estas seguro que quieres eliminar esta cita?")){
            setCitas(citas.filter(c => c.id !== id))
        }
}
    return(
        <>
            <div className="cita"> 
                <p>Mascota: <span>{nombreMascota}</span></p>
                <p>Dueño: <span>{nombreDueño}</span></p>
                <p>Fecha: <span>{Fecha}</span></p>
                <p>Hora: <span>{Hora}</span></p>
                <p>Sintomas: <span>{Sintomas}</span></p>
                <Button type = "null" text = "Eliminar ×" clase = "button-elimnar u-full-width" EliminarCita = {eliminar} />             
                </div>
        </>
    )
}

export default Cita;