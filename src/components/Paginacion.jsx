import React, { useEffect, useState } from 'react'



const Paginacion = (props) => {

  return <div>
  <button onClick={props.prevHandler}>Prev</button>
  <button onClick={props.nextHandler}>Next</button>
</div>
 
}

export default Paginacion