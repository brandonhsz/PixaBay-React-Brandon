import React, {useState, useEffect} from 'react';
import Formulario from './components/Formulario';
import ListadoImagenes from './components/ListadoImagenes';

function App() {

  const [busqueda, guardarBusqueda] = useState('');
  const [imagenes, guardarImagenes] = useState([]);

  useEffect(() => {

    const consultarApi = async () =>{
      
      if(busqueda === '') return;

      const imagenesPagina = 50;
      const key = '21309158-a55b479ac0e999cfb7525e012';
      const url = `https://pixabay.com/api/?key=${key}&q=${busqueda}&per_page=${imagenesPagina}`;
      
      const resultado = await fetch(url);
      const respuesta = await resultado.json();
      guardarImagenes(respuesta.hits);
    }
    consultarApi();
  },[busqueda])


  return (
    <div className='container'>
      <div className='jumbotron'>
        <p className='lead text-center'>Buscador de Imagenes</p>
        <Formulario
          guardarBusqueda={guardarBusqueda}
        />
      </div>
      <div>
        <ListadoImagenes imagenes={imagenes} />
      </div>
    </div>
  );
}

export default App;
