import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';
import { ThemeContext } from '../context/theme';

const Header = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="logo">
      <Link to="/">
        <h1 style={{ color: theme.textColor }}>
          Expense<br /> <span>Tracker</span>
        </h1>
      </Link>
    </div>
  );
};

export default Header;
