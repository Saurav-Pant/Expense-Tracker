import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <div className="logo">
      <Link to="/">
        <h1>
          Expense<br /> <span>Tracker</span>
        </h1>
      </Link>
    </div>
  );
};

export default Header;
