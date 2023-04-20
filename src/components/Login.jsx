import React, { useState } from 'react';
import "../styles/Login.css";
import { BsGithub, BsGoogle } from 'react-icons/bs';
import { BsTwitter } from 'react-icons/bs';
// import app from '../config/firebase.js';
// import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import Header from './Header';
// import UserContext from '../Context/UserContext';
// import UserData from './UserData';

// const auth = getAuth(app);
// const provider = new GoogleAuthProvider();

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const[user, setUser] = useState(null)

  const handleEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
    console.log(email);
  }

  const handlePassword = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
    console.log(password);
  }

  // const signInWithGoogle = () => {
  //   signInWithPopup(auth, provider)
  //     .then((result) => {
  //       setUser(result.user);
  //       console.log(user);
  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  // };

  return (
    // <UserContext.Provider value={user}>
      <div className='Login_Whole'>
        <Header />
        <div className="Login">
          <h1 className='Login_text'>Login</h1>
          <div className="input_password">
            <input type="email" placeholder='Email...' className='byuser' onChange={handleEmail} /><br />
            <input type="password" placeholder='Password...' className='byuser' onChange={handlePassword} /><br />
          </div>
          <div className='btn'>
            <button className='SignIn'>Sign In</button>
          </div>
          <h3 className='Login_text_2'>Or login with:</h3>
          <div className="btns">
            {/* <button onClick={signInWithGoogle}><BsGoogle /></button> */}
            <button><BsTwitter /></button>
            <button><BsGithub /></button>
          </div>
        </div>
        {/* <UserData /> */}
      </div>
    // </UserContext.Provider>
  )
}

export default Login;
