import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'


const Episode = () => {
    const [episodio, setEpisodio] = useState([])
    var  {id}  = useParams()
    useEffect(() => {
        const headers = {
            'Accept': 'application/json',
            'Authorization': 'Bearer DdrSXY3HJFYGkRndX0tp'
          }
        fetch(`https://bobsburgers-api.herokuapp.com/episodes/${id}`,{headers:headers})
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setEpisodio(data)
            }
            )
    }, [])




    return (
        <main className='character'>
        <aside className='episode__aside'>
        <h3 class="character__h3">{episodio.name}</h3>
        <div class="episode__details">

        <span class="details__tittle">Production Code</span> <span>{episodio.productionCode}</span>

        <span class="details__tittle">Air Date</span> <span>{episodio.airDate}</span>


        <span class="details__tittle">Season</span> <span>{episodio.season}</span>


        <span class="details__tittle">Episode</span> <span>{episodio.episode}</span>
       
        <span class="details__tittle">Total Viewers</span> <span>{episodio.totalViewers}</span>

      </div>
        </aside>
        </main>
    )








}


export default Episode

