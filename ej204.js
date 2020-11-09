import React, {useState} from 'react';

const Ej204 = () => {
    const [nombre, setNombre] = useState ('')

    function handleChange(avt) {
        setNombre(avt.target.value);
    }

    return (
        <div>
            <h1> Ejemplo de useState </h1>
            <h1> Mi nombre es: {nombre}</h1>
            <input type="text" value={nombre} onChange={handleChange}/>
        </div>
    );
}
export default Ej204;