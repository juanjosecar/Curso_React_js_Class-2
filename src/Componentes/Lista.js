import React,{useState, Fragment}  from 'react'

const Lista = () => {
    const [Numero, setNumero] = useState(5)
    const [ArrayNumero, setArrayNumero] = useState([1,2,3,4,5])
    
    


const AgregarNumero = () =>{
    console.log("Clickeado");

    setNumero(Numero +1);

    setArrayNumero([...ArrayNumero,Numero]);

}

    return ( 
        <Fragment>
             <h2>lista</h2>
             <button onClick={AgregarNumero}>Agregar</button>

             {
                 ArrayNumero.map((item, i) =>
             <p key={i}> {item} - {i}</p>
                 

                 )
             }

        </Fragment>
     );
}
 
export default Lista;


