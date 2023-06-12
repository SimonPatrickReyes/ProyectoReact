import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const Store = () => {
    const [tienda, setTienda] = useState([])
    var  {id}  = useParams()
    useEffect(() => {
        const headers = {
            'Accept': 'application/json',
            'Authorization': 'Bearer DdrSXY3HJFYGkRndX0tp'
          }
        fetch(`https://bobsburgers-api.herokuapp.com/storeNextDoor/${id}`,{headers:headers})
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setTienda(data)
            }
            )
    }, [])




    return (
        <main className='character'>
        <aside className='character__aside'>
        <h3 class="character__h3">{tienda.name}</h3>
        <img src={`${tienda.image}`} alt="{personaje.name}" className='character__img'/>       
        <div class="character__details">
            
        <span class="details__tittle">Appearance</span> <span> </span>

        <span class="details__tittle">Episode</span> <span>{tienda.episode}</span>


        <span class="details__tittle">Season</span> <span>{tienda.season}</span>




      </div>
        </aside>
        </main>
    )








}


export default Store

