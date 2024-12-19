import React from 'react';
import TransactionItem from './TransactionItem';

function TransactionList({ transactions, deleteTransaction }) {
  return (
    <div>
      <h2>Transaction History</h2>
      <ul>
        {transactions.map((transaction) => (
          <TransactionItem
            key={transaction.id}
            transaction={transaction}
            deleteTransaction={deleteTransaction}
          />
        ))}
      </ul>
    </div>
  );
}

export default TransactionList;
