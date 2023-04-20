import React,{useContext} from 'react';
import { FcGoogle } from 'react-icons/fc';
import Header from './Header';
import { ThemeContext } from '../context/theme';

const Login = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{ backgroundColor: theme.backgroundColor, color: theme.textColor }}>
      <Header />
      <div className="flex justify-center items-center h-screen">
        <button className="flex items-center space-x-2 bg-gray-100 hover:bg-gray-200 text-black text-2xl font-bold py-3 px-7 rounded-sm drop-shadow-xl ">
          <FcGoogle className='text-2xl mr-2'/>
          <span>Sign in with Google </span>
        </button>
        <button  className='ml-3 text-3xl absolute top-10 right-10 drop-shadow-2xl ' onClick={toggleTheme}>{theme.icon}</button>
      </div>
    </div>
  )
}

export default Login;
