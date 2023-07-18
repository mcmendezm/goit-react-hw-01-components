import './App.css';
import React from 'react';
import Card from './components/tarea 1/Card';
import './components/tarea 1/tarea 1.css';
import './components/tarea 2/tarea 2.css';
import './components/tarea 3/tarea 3.css';
import './components/tarea 4/tarea 4.css';
import './components/tarea 2/Statistics';
import Statistics from './components/tarea 2/Statistics';
import ListFriend from './components/tarea 3/ListFriend';
import TransactionHistory from './components/tarea 4/TransactionHistory';

//
function App() {
  return (
    <React.StrictMode>
      <Card />
      <Statistics title="Upload stats" />
      <ListFriend />
      <TransactionHistory />
    </React.StrictMode>
  );
}

export default App;
