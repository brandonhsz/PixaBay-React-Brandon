import React from 'react'

const Imagen = ({imagen}) => {

  const {previewURL,tags,largeImageURL,likes,views} = imagen;

  return ( 

    <div className='col-12 col-sm-6 col-md-4 col-lg-3 mb-3'>
      <div className='card '>
        <img src={previewURL} alt={tags} className='card-img-top'/>

        <div className='card-body'>
          <p className='cardText'>{likes} Me gusta</p>
          <p className='cardText'>{views} Vistas</p>
        </div>

        <div className='card-footer'>
          <a 
            href={largeImageURL}
            target='_blank'
            rel='noopener noreferrer'
            className='btn btn-primary btn-block'
          >Ver Imagen</a>
        </div>     

      </div>

    </div>

   );
}
 
export default Imagen;