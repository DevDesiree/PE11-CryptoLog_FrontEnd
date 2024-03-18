import React from 'react'
import TransactionTableComponent from '../transaction-table-component/TransactionTableComponent'
import CreateTransactionModalComponent from '../create-transaction-modal-component/CreateTransactionModalComponent'

const Transactions = ({ isAuthenticated }) => {
  return (
    <>
      <CreateTransactionModalComponent isAuthenticated={isAuthenticated}/>
      <TransactionTableComponent isAuthenticated={isAuthenticated} />
    </>
  )
}

export default Transactions