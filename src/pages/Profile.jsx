import React, { useContext } from 'react';

const Profile = () => {
  const email = localStorage.getItem('email');
  return (
    <div>
      <h1>Profile</h1>
      <p>Email: {email}</p>
    </div>
  );
};

export default Profile;
