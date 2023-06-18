import React, { useContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../contexts/UserContext';



const Profile = () => {
  const [userLogged, setUserLogged] = useState(JSON.parse(localStorage.getItem('user')) || [])
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')) || [])
  const {user, setUser} = useContext(UserContext)
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
        location.reload()
      };
      reader.readAsDataURL(file);
    }
  };

  const closeSession = (event) => {
    window.localStorage.removeItem("userContext")
    setUser(false) //UserContext
    window.localStorage.removeItem("user")
    navigate('/')
    location.reload()

  };


  /* useEffect(() => {
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
    [user]) */


  return (
    <div>
      <h1>Profile</h1>
      <div className='profileCard'>
        <img src={userLogged.profileImage} alt="Profile Image" className='profilePicture' />
        <label for="profilePicture" className='subirImagen'>Cambia tu imagen de perfil</label>
        <input id="profilePicture" type="file" accept=".png" className="subirImagen__input" onChange={handleProfileImageChange} />

        <p>Name: {userLogged.name}</p>
        <p>Email: {userLogged.email}</p>
        <button className='closeSession' onClick={closeSession}>Close Session</button>
      </div></div>
  );
};

export default Profile;
