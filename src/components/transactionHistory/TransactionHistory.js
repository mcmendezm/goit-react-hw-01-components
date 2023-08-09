import React from 'react';
import transactions from './transactions.json';
import styled from 'styled-components';

const TransactionHistory = () => {
  const MyTable = styled.table`
    width: 500px;
    border-collapse: collapse;
    border: 1px solid #868282;
    border-radius: 5%;
    text-align: center;
    margin-top: 90px;
    margin-bottom: 100px;
    font-size: 20px;
    & thead {
      background-color: #f5f5f5;
    }
    & tbody tr:nth-child(even) {
      background-color: #85c1e9;
    }
    & th {
      background-color: #2874a6;
      color: white;
    }
    & th,
    td {
      padding: 8px;
      text-align: left;
      text-align: center;
    }
  `;
  return (
    <MyTable>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {transactions.map(transaction => (
          <tr key={transaction.id}>
            <td>{transaction.type}</td>
            <td>{transaction.amount}</td>
            <td>{transaction.currency}</td>
          </tr>
        ))}
      </tbody>
    </MyTable>
  );
};

export default TransactionHistory;
