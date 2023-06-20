import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';
import { Link } from 'react-router-dom';
import userPicture from "../assets/images/userPicture.png";


const Profile = () => {
  const [userLogged, setUserLogged] = useState(JSON.parse(localStorage.getItem('user')) || [])
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')) || [])
  const { user, setUser } = useContext(UserContext)
  const email = localStorage.getItem('email');
  const name = localStorage.getItem('name');
  const navigate = useNavigate()


  const handleProfileImageChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'image/png') {
      const reader = new FileReader();
      reader.onload = () => {
        const profileImage = reader.result;
        console.log(profileImage)
        // Actualizar la imagen de perfil en el estado y en el LocalStorage
        // Usar setUser para actualizar el estado del usuario
        // Usar localStorage.setItem para actualizar la imagen de perfil en el LocalStorage

        const index = users.map(userRegistered => userRegistered.email).indexOf(userLogged.email);
        users[index].profileImage = profileImage
        window.localStorage.setItem("users", JSON.stringify(users));

        userLogged.profileImage = profileImage;
        setUserLogged(userLogged)
        window.localStorage.setItem("user", JSON.stringify(userLogged));
        //location.reload()
      };
      reader.readAsDataURL(file);
    }
  };

  const closeSession = (event) => {
    window.localStorage.removeItem("userContext")
    setUser(false) //UserContext
    window.localStorage.removeItem("user")
    navigate('/')
    //location.reload()

  };


  const favorites = JSON.parse(localStorage.getItem('favorite')) || [] // If there is no watchlist in local storage, set an empty array



  return (
    <main className='profile'>
      <h1 className='profile__h1' >My profile</h1>
      <div className='profileCard'>
        <h2>Profile Card</h2>
        <div className='profileCard__content'>
          <div className='profileCard__picture'>
            {
              userLogged.profileImage=="default"? (
                  <img src={userPicture} alt="default profile" className="profilePicture" />
              ):(
                  <img src={userLogged.profileImage} alt="default profile" className="profilePicture" />
              )
            }
            <label for="profilePicture" className='subirImagen'>Cambia tu imagen de perfil</label>
            <input id="profilePicture" type="file" accept=".png" className="subirImagen__input" onChange={handleProfileImageChange} />
          </div>
          <div className='profileCard__info'>
            <p>Name: {userLogged.name}</p>
            <p>Email: {userLogged.email}</p>
          </div>
        </div>
        <button className='closeSession' onClick={closeSession}>Close Session</button>
      </div>
      <h1 className='profile__h1'>Favorites</h1>
      <div className='char__images'>
        {
          favorites.map((favorite) => (
            <Link to={`/characters/${favorite.id}`} className='char__a'>
              <p className='char__names'>{favorite.name}</p>
              <img  key={Date.now()} src={`${favorite.image}`} alt="" class="paginacion_img" />
              <h3 className='char__h3'>{favorite.name}</h3>
            </Link>
          )
          )}
      </div>
    </main>
  );
};

export default Profile;
