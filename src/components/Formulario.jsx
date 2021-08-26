import React, {useState} from 'react'
import Error from './Error'

const Formulario = ({guardarBusqueda}) => {

  //ESTADOS DE BUSQUEDA
  const [termino, actualizarTermino] = useState('');
  const [error, actualizarError] = useState(false);

  //FUNCIONES APP



  const buscarImagenes = e =>{
    e.preventDefault();
    
    //validacion termino es cadena vacia
    if(termino.trim() === ''){
      actualizarError(true);
      return;
    }
    //validacion aprobada
    actualizarError(false);
    guardarBusqueda(termino);

  }

  return ( 

    <form 
      className='row'
      onSubmit={buscarImagenes}
    >
      {error ? <Error mensaje="INTRODUCE UN TERMINO DE BUSQUEDA"/> : null}

      <div className='form-group col-md-8'>
          <input 
            type="text"
            className='form-control form-control-lg'
            placeholder='Buscar Una Imagen'
            id="InputBuscador"
            onChange={e => actualizarTermino(e.target.value)}
          />
         
      </div>
      <div className='form-group col-md-4'>
        <input 
          type="submit"
          className='form-control form-control-lg btn btn-danger btn-block'
        />
      </div>

    </form>

   );
}
 
export default Formulario;