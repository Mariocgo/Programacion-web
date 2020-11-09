import React from 'react';

const ej203 = () => {
    //Estilo imperativo COMO HACERLO
    /*
    const entrada = ['a','b','c'];
    let resultado = [];

    for (let k = 0; k < entrada.length; k++) {
        resultado.push(entrada[k] + entrada[k]);
        
    }
    */

    //Estilo declarativo QUE DEBE HACER REACT

    const entrada = ['A','B','C'];
    let resultado = entrada.map(str => str + str);

    return <h1> {resultado} </h1>
}
export default ej203;