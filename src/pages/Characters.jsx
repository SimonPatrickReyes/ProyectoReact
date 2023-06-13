import React, { useEffect, useState } from 'react'
import Paginacion from '../components/Paginacion'
import { Link } from 'react-router-dom'
import { isInteger } from 'formik';


const Characters = () => {

    const [hairColor, setHairColor] = useState('');
    const [gender, setGender] = useState('');
    const [personajes, setPersonajes] = useState([])

    useEffect(() => {
        const headers = {
            'Accept': 'application/json',
        }
        if (hairColor && gender) {
            fetch(`https://bobsburgers-api.herokuapp.com/characters?hairColor=${hairColor}&gender=${gender}`, { headers: headers })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data)
                    setPersonajes(data)
                }
                )
        }
        else if (hairColor) {
            fetch(`https://bobsburgers-api.herokuapp.com/characters?hairColor=${hairColor}`, { headers: headers })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data)
                    setPersonajes(data)
                }
                )
        }

        else if (gender) {
            fetch(`https://bobsburgers-api.herokuapp.com/characters?gender=${gender}`, { headers: headers })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data)
                    setPersonajes(data)
                }
                )
        }
        else {
            fetch('https://bobsburgers-api.herokuapp.com/characters', { headers: headers })
                .then((res) => res.json())
                .then((data) => {
                    console.log(data)
                    setPersonajes(data)
                }
                )
        }

        console.log(personajes)
    }, [gender, hairColor])

    //personajes por pagina
    const itemsPerPage = 20;

    //conversion a numero porque sino suma 11 / página 0 por si acaso no hubiese nada en el storage
    const [currentPage, setCurrentPage] = useState(parseInt(localStorage.getItem("currentPage")) || 0)

    //calculo primera pagina
    const firstIndex = currentPage * itemsPerPage;
    //splice desde el principio y por itemsPerPage(20)
    const [items, setItems] = useState([...personajes].splice(firstIndex, itemsPerPage))
    console.log("CurrentPage " + currentPage)

    useEffect(() => {
        const firstIndex = currentPage * itemsPerPage;
        setItems([...personajes].splice(firstIndex, itemsPerPage))
    }, [personajes])


    const nextHandler = () => {
        console.log("Next")
        const totalItems = personajes.length;

        const nextPage = currentPage + 1;
        console.log("NextPage " + nextPage);
        const firstIndex = nextPage * itemsPerPage;

        if (firstIndex === totalItems) {
            console.log("Limite");
            return;
        }

        setItems([...personajes].splice(firstIndex, itemsPerPage))
        setCurrentPage(nextPage)
        //guardamos la pagina
        window.localStorage.setItem("currentPage", nextPage)

    }

    const prevHandler = () => {
        const prevPage = currentPage - 1;
        if (prevPage < 0) return;

        const firstIndex = prevPage * itemsPerPage;

        setItems([...personajes].splice(firstIndex, itemsPerPage))
        setCurrentPage(prevPage)
        window.localStorage.setItem("currentPage", prevPage)

    }


    return (
        <main className='characters'>
            <h1 className='char__tittle'>Characters</h1>
            <div className='filter'>
                <select
                    onChange={e => {
                        setGender(e.target.value)
                        setPersonajes([])
                        setCurrentPage(0)
                    }}>
                    {/* By genre */}
                    <option value="">Choose a gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
                <select
                    onChange={e => {
                        setHairColor(e.target.value)
                        setPersonajes([])
                        setCurrentPage(0)
                    }}>
                    {/* By hairColor */}
                    <option value="">Choose a hair color</option>
                    <option value="Blonde">Blonde</option>
                    <option value="Black">Black</option>
                    <option value="Brown">Brown</option>
                    <option value="Red">Red</option>
                    <option value="Gray">Gray</option>
                    <option value="Dark Brown">Dark Brown</option>
                    <option value="Dirty Blonde">Dirty Blonde</option>
                </select>
            </div>
            <div className='char__images'>
                {
                    items.map((personaje) => (
                        <Link to={`/characters/${personaje.id}`} className='char__a'>
                            <p className='char__names'>{personaje.name}</p>
                            <img src={`${personaje.image}`} alt="" class="paginacion_img" />
                            <h3 className='char__h3'>{personaje.name}</h3>
                        </Link>
                    )
                    )}
            </div>

            <Paginacion currentPage={0} nextHandler={nextHandler} prevHandler={prevHandler}></Paginacion>
        </main>
    )
}

export default Characters