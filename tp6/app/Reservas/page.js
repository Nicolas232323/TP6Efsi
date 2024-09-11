"use client";  

import { useState, useEffect } from 'react';
import styles from './page.module.css';
import Titulo from '@/components/Titulo';
import Subtitulo from '@/components/Subtitulo';
import Cita from '@/components/Cita';
import Formulario from '@/components/Formulario';

function App(props) {
  const [citas, setCitas] = useState([]);
  const [isHydrated, setIsHydrated] = useState(false); 

  useEffect(() => {
    if (typeof window !== "undefined") {
      const citasGuardadas = JSON.parse(localStorage.getItem('citas')) || [];
      setCitas(citasGuardadas);
      setIsHydrated(true); 
    }
  }, []);

  
  useEffect(() => {
    if (isHydrated) {
      localStorage.setItem('citas', JSON.stringify(citas));
    }
  }, [citas, isHydrated]);

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
            <div className={styles.listacita}>
              {citas.map((c) => (
                <div className={styles.cita} key={c.id}>
                  <Cita
                    citas={citas}
                    setCitas={setCitas}
                    nombreMascota={c.mascota}
                    nombreDueño={c.duenio}
                    Fecha={c.fecha}
                    Hora={c.hora}
                    Sintomas={c.sintomas}
                    id={c.id}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
