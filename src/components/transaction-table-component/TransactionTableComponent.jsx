import React, { useState, useEffect } from 'react';
import BackendFetchApi from '../../services/BackendFetchApi';
import UpdateTransactionModalComponent from '../update-transaction-modal-component/UpdateTransactionModalComponent';

const TransactionTableComponent = ({ isAuthenticated }) => {
  const [dropdownOpen, setDropdownOpen] = useState({});
  const [transactions, setTransactions] = useState([]);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [transactionId, setTransactionId] = useState(null);
  const [uniqueCoinIds, setUniqueCoinIds] = useState(new Set());

  const toggleDropdown = (coinId) => {
    setDropdownOpen(prevState => ({
      ...prevState,
      [coinId]: !prevState[coinId]
    }));
  };

  const openModal = (id) => {
    setTransactionId(id);
    setShowUpdateModal(true);
  };

  const closeModal = () => {
    setTransactionId(null);
  };

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const response = await BackendFetchApi.getTransactions();
        setTransactions(response);
        const coinIds = new Set(response.map(transaction => transaction.coin_id));
        setUniqueCoinIds(coinIds);
      } catch (error) {
        console.error('Error al obtener las transacciones:', error);
      }
    };

    fetchTransactions();
  }, []); // Se ejecuta una vez al montar el componente

  const handleDelete = async (id) => {
    try {
      await BackendFetchApi.deleteTransactions(id);
      setTransactions(transactions.filter(transaction => transaction.id !== id));
    } catch (error) {
      console.error('Error al eliminar la transacción:', error);
    }
  };

  return (
    <div>
      {isAuthenticated ? (
        <div>
          {[...uniqueCoinIds].map((coinId, index) => (
            <div key={index}>
              <div className="relative overflow-x-auto">
                <div className="text-xl uppercase text-center bg-black text-gray-400 mt-5 px-4 py-1">
                  <button id="dateRangeButton" type="button" className="inline-flex items-center text-white  font-medium hover:underline" onClick={() => toggleDropdown(coinId)}>
                    {coinId}
                    <svg className="w-3 h-3 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
                    </svg>
                  </button>
                </div>
                {dropdownOpen[coinId] && (
                  <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                      <tr>
                        <th scope="col" className="px-6 py-3">
                          Fecha
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Precio Compra
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Cantidad
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Importe
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Precio Actual
                        </th>
                        <th scope="col" className="px-6 py-3">
                          Acciones
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      {transactions.filter(transaction => transaction.coin_id === coinId).map((transaction, index) => (
                        <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                          <td className="px-6 py-4">{transaction.date_buy}</td>
                          <td className="px-6 py-4">{transaction.price_buy}</td>
                          <td className="px-6 py-4">{transaction.quantity}</td>
                          <td className="px-6 py-4">{transaction.amount}</td>
                          <td className="px-6 py-4">{transaction.actual_price}</td>
                          <td className="px-6 py-4">
                            <button onClick={() => openModal(transaction.id)} className="bg-green-500 mr-1 hover:bg-red-200 text-white font-bold py-2 px-4 rounded">
                              <i className="fa-solid fa-pen"></i>
                            </button>
                            <button onClick={() => handleDelete(transaction.id)} className="bg-red-500 ml-1 hover:bg-red-200 text-white font-bold py-2 px-4 rounded">
                              <i className="fa-solid fa-trash"></i>
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
              </div>
            </div>
          ))}
          {showUpdateModal && (
            <UpdateTransactionModalComponent
              transactionId={transactionId}
              setTransactions={setTransactions}
              closeModal={closeModal}
            />
          )}
        </div>
      ) : (
        <div>
          <h1>Debes iniciar sesión para ver este contenido.</h1>
        </div>
      )}
    </div>
  );
};

export default TransactionTableComponent;
