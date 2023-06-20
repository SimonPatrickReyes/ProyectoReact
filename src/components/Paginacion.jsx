import React, { useEffect, useState } from 'react'



const Paginacion = (props) => {

  return <div className='paginacion'>
  <button onClick={props.prevHandler} className='previous'>Prev</button>
  <button onClick={props.nextHandler} className='next'>Next</button>
</div>
 
}

export default Paginacion