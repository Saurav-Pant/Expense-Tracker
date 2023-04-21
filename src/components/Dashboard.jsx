import React,{useContext} from 'react';
import Header from './Header';
import '../styles/Dashboard.css';
import AddExpense from './AddExpense';
import { ThemeContext } from '../context/theme';

const Dashboard = () => {
  const {theme,toggleTheme}=useContext(ThemeContext);
  return (
    <div>
      <Header />
      <button  className='ml-3 text-3xl absolute top-10 right-10 drop-shadow-2xl ' onClick={toggleTheme}>{theme.icon}</button>
      <div className="wholeDashboard">
        {<div className="searchFilter">
          <input type="text" placeholder="Search expenses..." /> <br />
          <div className="sortFilter">
            <label htmlFor="sort">Sort by:</label><br/>
            <select name="sort" id="sort">
              <option value="date">Date</option>
              <option value="amount">Amount</option>
            </select>
            <label htmlFor="date">Filter by date:</label>
          </div>
        </div>}
      </div>
      <AddExpense/>
    </div>
  
)};

export default Dashboard;

