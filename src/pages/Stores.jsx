import React, { useEffect, useState } from 'react'
import Paginacion from '../components/Paginacion'
import { Link } from 'react-router-dom'



const Stores = () => {
    const [stores, setStores] = useState([])
    useEffect(() => {
        const headers = {
            'Accept': 'application/json',
        }
        fetch('https://bobsburgers-api.herokuapp.com/storeNextDoor', { headers: headers })
            .then((res) => res.json())
            .then((data) => {
                console.log(data)
                setStores(data)
            }
            )
        console.log(stores)
    }, [])

    //episodios por pagina
    const itemsPerPage = 20;

    const [currentPage, setCurrentPage] = useState(
      parseInt(localStorage.getItem('storesCurrentPage')) || 0
    );
  
    const firstIndex = currentPage * itemsPerPage;
    const [items, setItems] = useState([...stores].splice(firstIndex, itemsPerPage));
  
    useEffect(() => {
      const firstIndex = currentPage * itemsPerPage;
      setItems([...stores].splice(firstIndex, itemsPerPage));
    }, [stores, currentPage]);
  
    const nextHandler = () => {
      const totalItems = stores.length;
      const nextPage = currentPage + 1;
  
      if (nextPage * itemsPerPage >= totalItems) {
        console.log('Limit reached');
        return;
      }
  
      setItems([...stores].splice(nextPage * itemsPerPage, itemsPerPage));
      setCurrentPage(nextPage);
  
      
      window.localStorage.setItem('storesCurrentPage', nextPage);
    };
  
    const prevHandler = () => {
      const prevPage = currentPage - 1;
      if (prevPage < 0) return;
  
      setItems([...stores].splice(prevPage * itemsPerPage, itemsPerPage));
      setCurrentPage(prevPage);
  
    
      window.localStorage.setItem('storesCurrentPage', prevPage);
    };

    return (
        <main className='characters'>
            <h1 className='char__tittle'>stores</h1>
            <div className='char__images'>
               {
                items.map((tienda) => (
                    <Link to={`/stores/${tienda.id}`} className='char__a'>
                        <p className='char__names'>{tienda.name}</p>
                        <img src={`${tienda.image}`} alt="" class="paginacion_img" />
                        <h3 className='char__h3'>{tienda.name}</h3>
                    </Link>
                )
                )} 
            </div>
            <Paginacion currentPage={0} nextHandler={nextHandler} prevHandler={prevHandler}></Paginacion>
        </main>
    )
}

export default Stores