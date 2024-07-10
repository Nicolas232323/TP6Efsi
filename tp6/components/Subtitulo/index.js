import React from 'react';
import './Subtitulo.css';

const Subtitulo = ({texto = "default"}) => {
    return(

<h2>{texto}</h2>

    )
}

export default Subtitulo;