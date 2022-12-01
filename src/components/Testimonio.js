import React from 'react';

function Testimonio(){
  return(
    <div className='contenedor-testimonio' >
      <img className='imagen-testimonio' 
      src={require('../images/testimonio-emma.png')}
      alt='foto Emma'/> 
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>Emma Bostian en Suecia</p>
        <p className='cargo-testimonio'>Ingeniera de software en Spotify</p>
        <p className='texto-testimonio'>
          texto ejemplo
        </p>
      </div>

    </div>
  );
}
export default Testimonio;

//se coloca la dirección de la imagen entre dos llaves con require, para escribir el codigo html
//es una forma de importar imagenes

/*la exportación nombrada es cuando se exportan varios archivos por ejemplo:
 se coloca la palabra export al lado de function y al importar se colocan llaves en el nombre del componente
  
 export function Testimonio(){
  return(...
_______________
import {Testimonio} from './components/Testimonio';

*/

// la exportación por defecto es cuando solo se exporta uno archivo: export default App;
//App renderiza al componente Testimonio