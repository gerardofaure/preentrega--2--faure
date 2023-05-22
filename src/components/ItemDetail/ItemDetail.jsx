//Descripción general por producto - individual

import './ItemDetail.css'

const ItemDetail = ({ nombre , precio , marca , img }) => {
  return (
    <div className='contenedorItem'>
      <div className='descripContenedor'>
        <h2>PRODUCTO: {nombre} </h2>
        <h3>PRECIO: $ {precio} </h3>
        <h3>MARCA: {marca} </h3>
        <p>Ninguno de nuestros productos tiene garantía de ningún tipo. De nada le servirá demandarnos porque no tenemos dirección fija. Si compra este producto es bajo su propio riesgo y nuestra empresa no se hace responsable de daños, lesiones o muertes provocadas por el uso correcto o incorrecto de alguno de nuestros artículos.</p>
        </div>
      <img src={`/${img}`} alt={nombre} />
      </div>
  )
}

export default ItemDetail

