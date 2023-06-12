import React, { useState } from 'react';

//importar datos de usuario
//foto de perfil
//favoritos
const Profile = () => {
    const [users, setUsers] = useState(JSON.parse(localStorage.getItem('users')) || [])

    return (
        <div>
            Profile
        </div>
    )
}

export default Profile