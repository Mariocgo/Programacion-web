import React, {useState} from 'react';

const Ej205 = () => {
    const [number, setNumero] = useState (1)

    function changeNumber(ev) {
        setNumero(ev.target.value);
    }

    return(
        <div>
            <h2>La Tabla del {number}</h2>
            <input type = 'text' onChange = {changeNumber}></input>
            <NumberTable number = {number} />
        </div>
    )
}

    const NumberTable = (props) => {
        const numRange = [1, 2 , 3 , 4 , 5 , 6 , 7 , 8 , 9 , 10 ]
        const { number } = props
        return(
          <div>
          <table>
            {numRange.map(i => (
                <tr>
                <td>{number} * {i} = </td>
                <td>{number * i}</td>
                </tr>
            ))}
          
          
          </table>
          </div>
        )
}
export default Ej205;