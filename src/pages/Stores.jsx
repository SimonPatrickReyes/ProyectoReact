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

    const itemsPerPage = 20;
    useEffect(() => {
        setItems([...stores].splice(0, itemsPerPage))
    }, [stores])

    const [items, setItems] = useState([...stores].splice(0, itemsPerPage))

    const [currentPage, setCurrentPage] = useState(0);



    const nextHandler = () => {
        const totalItems = stores.length;

        const nextPage = currentPage + 1;

        const firstIndex = nextPage * itemsPerPage;

        if (firstIndex === totalItems) return;

        setItems([...stores].splice(firstIndex, itemsPerPage))
        setCurrentPage(nextPage)
    }

    const prevHandler = () => {
        const prevPage = currentPage - 1;
        if (prevPage < 0) return;

        const firstIndex = prevPage * itemsPerPage;

        setItems([...stores].splice(firstIndex, itemsPerPage))
        setCurrentPage(prevPage)
    }


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