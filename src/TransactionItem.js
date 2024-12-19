import React from 'react';

function TransactionItem({ transaction, deleteTransaction }) {
  return (
    <li>
      <span>{transaction.description}</span>
      <span>{transaction.amount}</span>
      <span>{transaction.type === 'income' ? 'Income' : 'Expense'}</span>
      <button onClick={() => deleteTransaction(transaction.id)}>Delete</button>
    </li>
  );
}

export default TransactionItem;
