import React from 'react';
import './Button.css';
const Button = ({text = "default", type = "default", clase = "null", EliminarCita}) => {
if(clase === "button-elimnar u-full-width"){
    <button onClick = {EliminarCita} type={type} className={clase}>{text}</button>
}

return(
<>
<button onClick = {EliminarCita} type={type} className={clase}>{text}</button>
</>
)
    
}

export default Button;