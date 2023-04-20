import React from 'react';
import Header from './Header';
import '../styles/Dashboard.css';
import AddExpense from './AddExpense';
// import UserContext from '../Context/UserContext';
// import UserData from './UserData';

const Dashboard = () => {
  return (
    // <UserContext.Provider value={user}>
    <div>
      <Header />
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
      {/* <UserData /> / */}
      <AddExpense/>
    </div>
    // {/* </UserContext.Provider> */}
  
)};

export default Dashboard;

