import React, { useState } from 'react';

function TransactionForm({ addTransaction }) {
  const [description, setDescription] = useState('');
  const [amount, setAmount] = useState('');
  const [type, setType] = useState('income');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (description && amount) {
      const newTransaction = {
        id: new Date().getTime(),
        description,
        amount: parseFloat(amount),
        type,
      };
      addTransaction(newTransaction);
      setDescription('');
      setAmount('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Transaction Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select value={type} onChange={(e) => setType(e.target.value)}>
        <option value="income">Income</option>
        <option value="expense">Expense</option>
      </select>
      <button type="submit">Add Transaction</button>
    </form>
  );
}

export default TransactionForm;
