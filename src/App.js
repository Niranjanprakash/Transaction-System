import React, { useState } from 'react';
import TransactionForm from './TransactionForm';
import TransactionList from './TransactionList';
import Balance from './Balance';
import './App.css';


function App() {
  const [transactions, setTransactions] = useState([]);
  
  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const deleteTransaction = (id) => {
    const updatedTransactions = transactions.filter((transaction) => transaction.id !== id);
    setTransactions(updatedTransactions);
  };

  return (
    <div className="App">
      <h1>Transaction System</h1>
      <TransactionForm addTransaction={addTransaction} />
      <Balance transactions={transactions} />
      <TransactionList transactions={transactions} deleteTransaction={deleteTransaction} />
    </div>
  );
}

export default App;
