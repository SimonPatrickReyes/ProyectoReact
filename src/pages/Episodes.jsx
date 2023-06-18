import React, { useEffect, useState } from 'react'
import Paginacion from '../components/Paginacion'
import { Link } from 'react-router-dom'


const Episodes = () => {
    const [season, setSeason] = useState('');
    const [episodes, setEpisodes] = useState([])

    useEffect(() => {
        const headers = {
            'Accept': 'application/json',
        }
        if (season) {
            fetch(`https://bobsburgers-api.herokuapp.com/episodes?season=${season}`, { headers: headers })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data)
                    setEpisodes(data)
                }
                )
        }

        else {
            fetch('https://bobsburgers-api.herokuapp.com/episodes', { headers: headers })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data)
                    setEpisodes(data)
                }
                )
        }

        console.log(episodes)
    }, [season])

    //episodios por pagina
    const itemsPerPage = 50;

    const [currentPage, setCurrentPage] = useState(
      parseInt(localStorage.getItem('episodesCurrentPage')) || 0
    );
  
    const firstIndex = currentPage * itemsPerPage;
    const [items, setItems] = useState([...episodes].splice(firstIndex, itemsPerPage));
  
    useEffect(() => {
      const firstIndex = currentPage * itemsPerPage;
      setItems([...episodes].splice(firstIndex, itemsPerPage));
    }, [episodes, currentPage]);
  
    const nextHandler = () => {
      const totalItems = episodes.length;
      const nextPage = currentPage + 1;
  
      if (nextPage * itemsPerPage >= totalItems) {
        console.log('Limit reached');
        return;
      }
  
      setItems([...episodes].splice(nextPage * itemsPerPage, itemsPerPage));
      setCurrentPage(nextPage);
  
      window.localStorage.setItem('episodesCurrentPage', nextPage);
    };
  
    const prevHandler = () => {
      const prevPage = currentPage - 1;
      if (prevPage < 0) return;
  
      setItems([...episodes].splice(prevPage * itemsPerPage, itemsPerPage));
      setCurrentPage(prevPage);
  
      window.localStorage.setItem('episodesCurrentPage', prevPage);
    };


    return (
        <main className='characters'>
            <h1 className='char__tittle'>Episodes</h1>
            <div className='filter'>
                <select
                    onChange={e => {
                        setSeason(e.target.value)
                        setEpisodes([])
                        setCurrentPage(0)
                    }}>
                    {/* By genre */}
                    <option value="">Choose a season</option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                    <option value="9">9</option>
                    <option value="10">10</option>
                    <option value="11">11</option>
                    <option value="12">12</option>
                </select>


            </div>
            <div className='char__images'>
                {
                    items.map((episodios) => (
                        <Link to={`/episodes/${episodios.id}`} className='episodes'>
                            <h3 className='episode__h3'>{episodios.name}</h3>
                        </Link>
                    )
                    )}
            </div>

        </main>
    )
}

export default Episodes