import React from 'react'
import TransactionTableComponent from '../transaction-table-component/TransactionTableComponent'
import CreateTransactionModalComponent from '../create-transaction-modal-component/CreateTransactionModalComponent'
import UpdateTransactionModalComponent from '../update-transaction-modal-component/UpdateTransactionModalComponent'

const Transactions = ({ isAuthenticated }) => {
  return (
    <>
      <CreateTransactionModalComponent isAuthenticated={isAuthenticated}/>
      <UpdateTransactionModalComponent isAuthenticated={isAuthenticated} />
      <TransactionTableComponent isAuthenticated={isAuthenticated} />
    </>
  )
}

export default Transactions