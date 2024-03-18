import React from 'react'
import TransactionTableComponent from '../transaction-table-component/TransactionTableComponent'

const Transactions = ({isAuthenticated}) => {
  return (
    <TransactionTableComponent isAuthenticated={isAuthenticated}/>
  )
}

export default Transactions