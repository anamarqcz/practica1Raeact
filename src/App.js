import './App.css';
import Testimonio from './components/Testimonio';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
      <h1>Esto es lo que dicen nuestros alumnos</h1>
      <Testimonio/>
      </div>
    </div>
  );
}

export default App;

//la exportación nombrada es cuando se exportan varios archivos
// la exportación por defecto es cuando solo se exporta uno archivo: export default App;

//App renderiza al componente Testimonio