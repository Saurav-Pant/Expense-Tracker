import React from 'react';
import Login from './Login';
import "../styles/Home.css"
import Header from './Header';
const Home = () => {
  return (
    <div className='whole'>
       <Header/>
       <Login />
    </div>
  );
};

export default Home;