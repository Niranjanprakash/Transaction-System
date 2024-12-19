import React from 'react';

function Balance({ transactions }) {
  const totalBalance = transactions.reduce((acc, transaction) => {
    return transaction.type === 'income'
      ? acc + transaction.amount
      : acc - transaction.amount;
  }, 0);

  return (
    <div>
      <h2>Balance</h2>
      <p>Total Balance: Rs:{totalBalance.toFixed(2)}</p>
    </div>
  );
}

export default Balance;
