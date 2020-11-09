import React, {useState} from 'react';


const ej204 = () => {
    const [ nombre, setNombre ] = useState('')

    function handleChange(evt) {
        setNombre(evt.target.vakue);
    }
    return (
    <div>
    <h1> aqui siendo useState</h1>
    <h2>Mi nombre es: {nombre }</h2>
    <input type = "text" value={nombre} onChange = {handleChange} />
    </div>
    )
}

export default ej204;