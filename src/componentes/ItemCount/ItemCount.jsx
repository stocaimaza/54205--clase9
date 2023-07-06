//Vamos a generar un contador de productos. 
//Tenemos que almcenar el número de unidades seleccionadas por el cliente. 
//¿Donde lo podemos guardar? En un estado. 

//Usamos Hooks para crear un estado. Los hooks son funciones propias de la librería que me permiten crear un estado, manipularlos, etc. 
//Vamos a usar el hook: useState. 

//1) Paso principal, importar el useState. 
import { useState } from "react"


const ItemCount = () => {
    const [contador, setContador] = useState(1)
    //useState me retorna un array con dos elementos. El primer elemento que me retorna es el estado, y el segundo es una función que me permite modificar el valor del estado. 

    const incrementar = () => {
        if(contador < 5) {
            setContador(contador + 1);
        }
    } 

    const decrementar = () => {
        if(contador > 1) {
            setContador(contador - 1);
        }
    }


  return (
    <div>
        <button onClick={decrementar}> - </button>
        <p> {contador} </p>
        <button onClick={incrementar}> + </button>
    </div>
  )
}
//Incrementar y decrementar van sin parentesis porque sino se ejecutaría al momento de renderizar el componente. Y solo queremos que se ejecute cuando el visitante haga click en los botones. 



export default ItemCount