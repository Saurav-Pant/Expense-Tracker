import React, { useContext } from 'react';
import UserContext from '../Context/UserContext';

const UserData = () => {
  const user = useContext(UserContext);

  return (
    <div>
      {user ? (
        <div>
          <p>Name: {user.displayName}</p>
          <p>Email: {user.email}</p>
          <img src={user.photoURL} alt="profile pic" />
        </div>
      ) : (
        <p></p>
      )}
    </div>
  );
}

export default UserData;
