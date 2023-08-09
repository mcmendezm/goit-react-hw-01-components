import './App.css';
import React from 'react';
import Profile from './components/profile/Profile';
import Statistics from './components/statistics/Statistics';
import ListFriend from './components/friendList/ListFriend';
import TransactionHistory from './components/transactionHistory/TransactionHistory';

//
function App() {
  return (
    <React.StrictMode>
      <Profile />
      <Statistics title="UPLOAD STATS" />
      <ListFriend />
      <TransactionHistory />
    </React.StrictMode>
  );
}

export default App;
