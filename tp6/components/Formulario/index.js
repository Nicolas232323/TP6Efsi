import React from 'react';
//import { useState } from 'react';
import './Formulario.css';
import Input from '../Input';
import Button from '../Button';
const Formulario = ({citas, setCitas}) => {
    const crearCita = (e) => {
      e.preventDefault();
      console.log(e.target.mascota.value)
        if (window.confirm("Estas seguro que quieres crear la cita?")) {
            setCitas([
            ...citas,
              {
                id: Date.now(),
                mascota: e.target.mascota.value,
                duenio: e.target.duenio.value,
                fecha: e.target.fecha.value,
                hora: e.target.hora.value,
                sintomas: e.target.sintomas.value,
              },
            ]);
            console.log(citas)
          }
    }
      return(
    <form className="" onSubmit={crearCita}>
      <Input label="Nombre Mascota" tipo="text" nombre="mascota" className="u-full-width" placeholder="Nombre Mascota"></Input>
      <Input label="Nombre Dueño" tipo="text" nombre="duenio" className="u-full-width" placeholder="Nombre dueño de la mascota"></Input>
      <Input label="Fecha" tipo="date" nombre="fecha" className="u-full-width" placeholder="DD/MM/AAAA"></Input>
      <Input label="Hora" tipo="time" nombre="hora" className="u-full-width" placeholder="HH:MM"></Input>
      <Input label="Síntomas" tipo="textarea" nombre="sintomas" className="u-full-width" placeholder="Sintomas"></Input>
      <Button text="Agregar Cita" type="Submit" clase="button-primary"> </Button>
    </form>
)
}
export default Formulario;