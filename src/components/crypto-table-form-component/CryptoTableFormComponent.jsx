import React, { useState } from 'react';

const CryptoTableFormComponent = () => {

    const [searchTerm, setSearchTerm] = useState('');

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    // Array de ejemplo para probar
    const cryptoData = [
        { id: 1, name: "Bitcoin", symbol: "BTC", price: 60000 },
        { id: 2, name: "Ethereum", symbol: "ETH", price: 2000 },
        { id: 3, name: "Litecoin", symbol: "LTC", price: 150 },
    ];

    // Filtrando las monedas basandose en el termino de búsqueda
    const filteredCryptoData = cryptoData.filter((crypto) => {
        return crypto.name.toLowerCase().includes(searchTerm.toLowerCase()) || crypto.symbol.toLowerCase().includes(searchTerm.toLowerCase());
    });
    return (
        <>
            <div className="flex mb-5 items-center justify-evenly">
                <div className='flex'>
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium sr-only text-white">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="search" id="default-search" value={searchTerm} onChange={handleChange} className="block w-full p-4 ps-10 text-sm border rounded-lg bg-gray-700 border-gray-600 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 text-white" placeholder="Buscar por Nombre o Siglas" required />
                    </div>
                </div>
                <div>
                    <a href="#" className="text-blue-500 hover:text-blue-600">⭐ Mostrar Solo Favoritos</a>
                </div>
            </div>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                #
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Nombre
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Sigla
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Precio
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredCryptoData.map((crypto) => (
                            <tr key={crypto.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {crypto.id}
                                </th>
                                <td className="px-6 py-4">
                                    {crypto.name}
                                </td>
                                <td className="px-6 py-4">
                                    {crypto.symbol}
                                </td>
                                <td className="px-6 py-4">
                                    ${crypto.price}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default CryptoTableFormComponent