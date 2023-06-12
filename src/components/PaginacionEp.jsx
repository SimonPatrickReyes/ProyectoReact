import React, { useEffect, useState } from 'react'
import { useRouteError, Link } from 'react-router-dom'



const PaginacionEp = (props) => {

  const items = props.items.map((episodio, index) => {
    return <Link to={`/episode/${episodio.id}`} className='episode__a'>
      <h3 className='episode__h3'>{episodio.name}</h3>
    </Link>
  }



  )




  return <div>
    <div className='char__images'>{items}</div>
    <button onClick={props.prevHandler}>Prev</button>
    <button onClick={props.nextHandler}>Next</button>
  </div>

}

export default PaginacionEp