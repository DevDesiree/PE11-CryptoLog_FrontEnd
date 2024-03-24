import React from 'react'
import TransactionTableComponent from '../transaction-table-component/TransactionTableComponent'
import CreateTransactionModalComponent from '../create-transaction-modal-component/CreateTransactionModalComponent'
import UpdateTransactionModalComponent from '../update-transaction-modal-component/UpdateTransactionModalComponent'

const Transactions = ({ isAuthenticated }) => {
  return (
    <>
      <section className="h-[150px]  bg-no-repeat bg-cover bg-[url('/src\assets\images\banner-mis-transacciones.jpg')] bg-gray-700 bg-blend-multiply mb-5">
        <div className="px-4 mx-auto max-w-screen-lg text-center py-10 lg:py-30">
          <h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-none text-white md:text-4xl lg:text-5xl">Mis Activos</h1>
        </div>
      </section>
      <CreateTransactionModalComponent isAuthenticated={isAuthenticated} />
      <UpdateTransactionModalComponent isAuthenticated={isAuthenticated} />
      <TransactionTableComponent isAuthenticated={isAuthenticated} />
    </>
  )
}

export default Transactions