"use client"
import styles from './page.module.css';
import Titulo from '@/components/Titulo';
import Subtitulo from '@/components/Subtitulo';
import Cita from '@/components/Cita';
import Formulario from '@/components/Formulario';
import { useState } from 'react';
function App(props) {
  const [citas, setCitas] = useState([]);
  return (
    <>
      <Titulo texto="ADMINISTRADOR DE PACIENTES" />
      <div className="container">
        <div className="row">
          <div className="one-half column">
            <Subtitulo texto="CREAR MI CITA" />
            <Formulario citas={citas} setCitas={setCitas}></Formulario>
          </div>
          <div className="one-half column">
            <Subtitulo texto="ADMINISTRA TUS CITAS" />
            <div className= {styles.listacita}>
                  {citas.map(c => <div className={styles.cita}><Cita citas={citas} setCitas={setCitas} nombreMascota={c.mascota} nombreDueño={c.duenio} Fecha={c.fecha} Hora={c.hora} Sintomas={c.sintomas} id={c.id}></Cita></div>)}
              </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default App;