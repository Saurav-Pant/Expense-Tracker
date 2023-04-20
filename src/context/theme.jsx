import React, { createContext, useState } from 'react';

// // create a context for the theme
export const ThemeContext = createContext();

// // define the light and dark themes
export const lightTheme = {
  backgroundColor: '#FEFCF3',
  textColor: 'black',
  icon: '☀️',

};

export const darkTheme = {
  backgroundColor: '#180A0A',
  textColor: 'white',
  icon: '🌙',
};

// create a component that will provide the theme to its children

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(lightTheme);

  // function to toggle between light and dark theme
  const toggleTheme = () => {
    setTheme(theme === lightTheme ? darkTheme : lightTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
