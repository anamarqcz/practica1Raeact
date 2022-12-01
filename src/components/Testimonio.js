import React from 'react';
import '../style-sheets/Testimonio.css';
function Testimonio(props){
  return(
    <div className='contenedor-testimonio' >
      <img className='imagen-testimonio' 
      src={require(`../images/testimonio-${props.imagen}.png`)}
      alt='foto'
      /> 
      <div className='contenedor-texto-testimonio'>
        <p className='nombre-testimonio'>
         <strong> {props.nombre} </strong>
          en {props.pais}
        </p>
        <p className='cargo-testimonio'>{props.cargo} 
        en <strong>{props.empresa}</strong> 
        </p>
        <p className='texto-testimonio'>
        "{props.testimonio}"
        </p>
      </div>

    </div>
  );
}
export default Testimonio;

//se coloca la dirección de la imagen entre dos llaves con require, para escribir el codigo html
//es una forma de importar imagenes
/*
<div className='contenedor-testimonio' >
      <img className='imagen-testimonio' 
      src={require('../images/testimonio-emma.png')}
      alt='foto Emma'/>

      Usando props la importacion de imagenes cambia de esta manera:

      <div className='contenedor-testimonio' >
      <img className='imagen-testimonio' 
      src={require(`../images/testimonio-${props.imagen}.png`)}
      alt='foto Emma'/> 

      y en App, que renderiza el testimonio se pone el nombre de la imagen junto
      con los otros:

      <Testimonio
      nombre='Emma Bostian'
      pais='Suecia'
      imagen=''
      cargo='Ingeniera de Software'
      empresa='Spotify'
      testimonio='Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
      sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim 
      ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
      ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 
      velit esse cillum dolore eu fugiat nulla 
      pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui 
      officia deserunt mollit anim id est laborum'
      />
*/



/*la exportación nombrada es cuando se exportan varios archivos por ejemplo:
 se coloca la palabra export al lado de function y al importar se colocan llaves en el nombre del componente
  
 export function Testimonio(){
  return(...
_______________
import {Testimonio} from './components/Testimonio';

*/

// la exportación por defecto es cuando solo se exporta uno archivo: export default App;
//App renderiza al componente Testimonio

//se debe importar el archivo de los estilos css