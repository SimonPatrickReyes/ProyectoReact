import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { UserContext } from '../contexts/UserContext';
import favoriteEmpty from "../assets/images/favorite.png";
import favoriteFull from "../assets/images/favorite_full.png";



const Character = () => {
    const [personaje, setPersonaje] = useState([])
    const [favorite, setFavorite] = useState(false)
    const { user, setUser } = useContext(UserContext)


    useEffect(() => {
        // Almacena el valor favorite del localStorage convertido a objeto
        const favorite = JSON.parse(localStorage.getItem('favorite')) || []

        // Detecta si el id es coincide con el id del personaje en pantalla
        const isFavorite = favorite.find(item => item.id === personaje.id)

        // Si hay favorite, este sera true
        isFavorite ? setFavorite(true) : setFavorite(false)
    }, [personaje])

    // Añade o quita el favorito a los personajes
    const handleFavorite = () => {
        
        // Misma accion del useEffect
        const favorite = JSON.parse(localStorage.getItem('favorite')) || []
        const isFavorite = favorite.find(item => item.id === personaje.id)
    
        // Si el personaje que vemos ya esta en favoritos, se ejecuta el siguiente código
        if (isFavorite) {
            // Todos los personajes con favoritos, a excepcion del actual, pasan a una nueva array "newFavorite"
            const newFavorite = favorite.filter(item => item.id !== personaje.id)
            localStorage.setItem('favorite', JSON.stringify(newFavorite))
            setFavorite(false)
        } else {
            // Si no esta en favoritos, sera añadido a la lista
            favorite.push(personaje)
            localStorage.setItem('favorite', JSON.stringify(favorite))
            setFavorite(true)
        }
    }



    var { id } = useParams()
    useEffect(() => {
        const headers = {
            'Accept': 'application/json',
            'Authorization': 'Bearer DdrSXY3HJFYGkRndX0tp'
        }
        fetch(`https://bobsburgers-api.herokuapp.com/characters/${id}`, { headers: headers })
            .then((res) => res.json())
            .then((data) => {
                const modifiedData = replaceEmptyDetails(data);
                setPersonaje(modifiedData);
            }
            )
    },
        [])

    const [favoriteMessage, setFavoriteMessage] = useState(false)

    const replaceEmptyDetails = (character) => {
        const modifiedCharacter = { ...character };

        if (!modifiedCharacter.voicedBy) {
            modifiedCharacter.voicedBy = 'Unknown';
        }
        if (!modifiedCharacter.age) {
            modifiedCharacter.age = 'Unknown';
        }
        if (!modifiedCharacter.gender) {
            modifiedCharacter.gender = 'Unknown';
        }
        if (!modifiedCharacter.hairColor) {
            modifiedCharacter.hairColor = 'Unknown';
        }
        if (!modifiedCharacter.occupation) {
            modifiedCharacter.occupation = 'Unknown';
        }
        if (!modifiedCharacter.firstEpisode) {
            modifiedCharacter.firstEpisode = 'Unknown';
        }

        return modifiedCharacter;
    };

    function closeMessage() {
        setFavoriteMessage(false)
    }

    const handleFavoriteClick = () => {
        // Save the character ID in localStorage
        localStorage.setItem('favoriteCharacterId', id);


    };

    useEffect(() => {
        setFavoriteMessage(false);
        setTimeout(() => {
            setFavoriteMessage(true); setTimeout(() => {
                setFavoriteMessage(false);
            }, 6000)
        }, 3000);




    }, [])




    return (
        <main className='character'>
            <div className='character__divSpan'>
                {favoriteMessage && <span className='character__span'>
                    <button onClick={() => setFavoriteMessage(false)} className='character__closeSpan'>✖</button>
                    ¡No olvides guardar a tus personajes favoritos haciendo click en el corazon!</span>}
            </div>
            <aside className='character__aside'>
                <h3 className="character__h3">{personaje.name}</h3>
                {/* <button onClick={handleFavoriteClick} className='character__favorite'>
                    <img src={favorite} alt="Favorite" id='favorite' />
                </button> */}
                {user && (
                    <div className='button-center'>
                        {favorite ? (
                            <button className='button' onClick={handleFavorite}>
                                <img src={favoriteFull} alt="favoriteFull" id='favoritefull' />
                            </button>
                        ) : (
                            <button className='button' onClick={handleFavorite}>
                                <img src={favoriteEmpty} alt="Favorite" id='favorite' />
                            </button>
                        )}
                    </div>
                )}
                <img src={`${personaje.image}`} alt="{personaje.name}" className='character__img' />
                <div className="character__details">
                    <span className="details__tittle">Voiced by</span> <span>{personaje.voicedBy}</span>

                    <span className="details__tittle">Age</span> <span>{personaje.age}</span>


                    <span className="details__tittle">Gender</span> <span>{personaje.gender}</span>


                    <span className="details__tittle">Hair color</span> <span>{personaje.hairColor}</span>

                    <span className="details__tittle">Ocupation</span> <span>{personaje.occupation}</span>


                    <span className="details__tittle">First episode</span> <span>{personaje.firstEpisode}</span>


                </div>
            </aside>
        </main>
    )








}


export default Character
