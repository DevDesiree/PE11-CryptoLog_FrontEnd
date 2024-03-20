import React, { useState, useEffect } from 'react';
import BackendFetchApi from '../../services/BackendFetchApi';

const UpdateTransactionModalComponent = ({ transactionId, closeModal, setTransactions }) => {
    const [transactionData, setTransactionData] = useState({
        coin_id: '',
        price_buy: '',
        quantity: '',
        amount: '',
        date_buy: '',
    });

    useEffect(() => {
        const fetchTransaction = async () => {
            try {
                const response = await BackendFetchApi.getTransactionsID(transactionId);
                setTransactionData(response.transaction);
            } catch (error) {
                console.error('Error fetching transaction:', error);
            }
        };

        if (transactionId) {
            fetchTransaction();
        }
    }, [transactionId]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        let newTransactionData = { ...transactionData, [name]: value };

        if (name === 'quantity' || name === 'price_buy') {
            const quantity = parseFloat(newTransactionData.quantity);
            const priceBuy = parseFloat(newTransactionData.price_buy);
            newTransactionData = {
                ...newTransactionData,
                amount: (quantity * priceBuy).toFixed(2),
            };
        }

        setTransactionData(newTransactionData);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await BackendFetchApi.updateTransactions(transactionId, transactionData);
            console.log('Transacción actualizada correctamente:', response);
            fetchTransactions();
            closeModal();
        } catch (error) {
            console.error('Error al actualizar la transacción:', error);
        }
    };

    const fetchTransactions = async () => {
        try {
            const response = await BackendFetchApi.getTransactions();
            setTransactions(response);
        } catch (error) {
            console.error('Error al obtener las transacciones:', error);
        }
    };

    return (
        <div>
            {transactionId && (
                <form onSubmit={handleSubmit} className="fixed top-0 left-0 w-full h-full bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-customDark shadow-2xl sm:rounded-3xl dark:border-gray-600 p-6 rounded-lg mx-auto w-full max-w-md">
                        <h1 className="mb-5 text-white text-lg text-center">Editar Transacción</h1>
                        <div className="mb-5">
                            <label htmlFor="date_buy" className="block mb-2 text-sm font-medium text-white">Fecha</label>
                            <input type="date" id="date_buy" name="date_buy" value={transactionData.date_buy} onChange={handleChange} className="bg-gray-500 bg-opacity-20 border border-opacity-20 border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="name" className="block mb-2 text-sm font-medium text-white">Nombre</label>
                            <input type="text" id="name" name="coin_id" disabled value={transactionData.coin?.name || ''} onChange={handleChange} className="bg-gray-500 bg-opacity-20 border border-opacity-20 border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Bitcoin" required />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="price_buy" className="block mb-2 text-sm font-medium text-white">Precio Compra</label>
                            <input type="number" id="price_buy" name="price_buy" value={transactionData.price_buy} onChange={handleChange} className="bg-gray-500 bg-opacity-20 border border-opacity-20 border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="250" required />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="quantity" className="block mb-2 text-sm font-medium text-white">Cantidad</label>
                            <input type="number" id="quantity" name="quantity" value={transactionData.quantity} onChange={handleChange} className="bg-gray-500 bg-opacity-20 border border-opacity-20 border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="4" required />
                        </div>
                        <div className="mb-5">
                            <label htmlFor="amount" className="block mb-2 text-sm font-medium text-white">Importe</label>
                            <input type="number" id="amount" name="amount" value={transactionData.amount} onChange={handleChange} className="bg-gray-500 bg-opacity-20 border border-opacity-20 border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="20000" required />
                        </div>
                        <div className="flex flex-col sm:flex-row justify-center items-center space-y-3 sm:space-y-0 sm:space-x-3">
                            <button type="submit" className="text-white bg-gradient-to-r from-indigo-600 from-10% via-blue-500 to-90% to-sky-500 via-60%  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5">Actualizar Transacción</button>
                            <button onClick={closeModal} className="text-white bg-gradient-to-r from-pink-600 from-10% via-orange-600 to-90% to-red-400 via-60%  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Cancelar</button>
                        </div>
                    </div>
                </form>
            )}
        </div>
    );
}

export default UpdateTransactionModalComponent;
