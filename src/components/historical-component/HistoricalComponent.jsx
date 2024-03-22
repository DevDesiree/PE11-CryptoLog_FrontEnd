import React, { useState, useEffect } from 'react';
import BackendFetchApi from '../../services/BackendFetchApi';
import PaginationComponent from '../pagination-component/PaginationComponent';


const HistoricalComponent = () => {
    const [historicals, setHistoricals] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage] = useState(10);


    const totalItems = historicals.length;
    const indexOfLastHistorical = currentPage * perPage;
    const indexOfFirstHistorical = indexOfLastHistorical - perPage;
    const currentHistoricals = historicals.slice(indexOfFirstHistorical, indexOfLastHistorical);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    useEffect(() => {
        const fetchHistoricalsData = async () => {
            try {
                const historicalsData = await BackendFetchApi.fetchHistoricals();
                setHistoricals(historicalsData);
            } catch (error) {
                console.error('Error fetching historical data:', error);
            }
        };

        fetchHistoricalsData();
    }, []);

    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleString();
    };

    return (
        <>
            <div className="relative overflow-x-auto mt-7">
                <table className="w-full text-sm text-left rtl:text-right  text-gray-200">
                    <thead className="text-xs uppercase text-center bg-black text-gray-200">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-gray-300">
                                Fecha y Hora
                            </th>
                            <th scope="col" className="px-6 py-3 text-gray-300">
                                Suceso
                            </th>
                            <th scope="col" className="px-6 py-3 text-gray-300">
                                Dispositivo
                            </th>
                            <th scope="col" className="px-6 py-3 text-gray-300">
                                IP
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentHistoricals.map((historical) => (
                            <tr key={historical.id} className="border-b bg-gray-800 text-center border-gray-700">
                                <td className="px-6 py-4">
                                    {formatDate(historical.created_at)}
                                </td>
                                <td className={`px-6 py-4 font-medium whitespace-nowrap ${historical.action === 'Inicio de sesión' ? 'text-green-300' : 'text-yellow-400'}`}>
                                    {historical.action}
                                </td>
                                <td className="px-6 py-4 ">
                                    {historical.device}
                                </td>
                                <td className="px-6 py-4">
                                    {historical.ip_address}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                <div className="flex justify-center mt-4">
                    <PaginationComponent
                        currentPage={currentPage}
                        perPage={perPage}
                        totalItems={totalItems}
                        onPageChange={handlePageChange}
                    />
                </div>
            </div >
        </>
    );
};

export default HistoricalComponent;
