import React, { useState, useEffect } from 'react';
import ApiCacheJson from '../../services/ApiCacheJson';
import BackendFetchApi from '../../services/BackendFetchApi';
import BtnUpdateApiComponent from '../btn-update-api-component/BtnUpdateApiComponent';
import PaginationComponent from '../pagination-component/PaginationComponent';
import Alerts from "../alerts-component/Alerts";

const CryptoTableFormComponent = ({ isAuthenticated }) => {

    const iconFavorite = <svg className="w-6 h-6 fill-current text-yellow-400 mr-1" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" /></svg>

    const noIconFavorite = <svg className="w-6 h-6 fill-current text-gray-400 mr-1" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" /></svg>

    const [searchTerm, setSearchTerm] = useState('');
    const [favorites, setFavorites] = useState([]);
    const [cryptoData, setCryptoData] = useState([]);
    const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage] = useState(50);

    const totalItems = cryptoData.length;
    const indexOfLast = currentPage * perPage;
    const indexOfFirst = indexOfLast - perPage;
    
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };
    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const sweetAlert = Alerts();

    const handleFavoriteSubmit = async (e, id) => {
        e.preventDefault();

        if (isAuthenticated) {
            try {
                if (favorites.includes(id)) {
                    await BackendFetchApi.removeFavoriteCoin(id);
                    console.log(`Se ha eliminado ${id}`);
                } else {
                    await BackendFetchApi.addFavoriteCoin(id);
                    console.log(`Se ha agregado ${id}`);
                }

                const updatedFavorites = favorites.includes(id) ? favorites.filter(favoriteID => favoriteID !== id) : [...favorites, id];
                setFavorites(updatedFavorites);
            } catch (error) {
                console.error('Error al agregar/eliminar moneda favorita:', error);
            }
        } else {
            sweetAlert.showErrorAlert("Error!", "Por favor inicia sesión para agregar criptomonedas a favoritos.")
        }
    };
    useEffect(() => {
        const fetchCryptocurrencies = async () => {
            try {
                const response = await ApiCacheJson.getCryptocurrencies();
                setCryptoData(response);
            } catch (error) {
                console.error('Error al cargar las criptomonedas:', error);
            }
        };

        fetchCryptocurrencies();
    }, []);

    useEffect(() => {
        const fetchUserFavorites = async () => {
            try {
                const userFavorites = await BackendFetchApi.getFavoriteCoin();
                setCurrentPage(1);
                setFavorites(userFavorites);
            } catch (error) {
                console.error('Error al obtener los favoritos del usuario:', error);
            }
        };

        if (isAuthenticated) {
            fetchUserFavorites();
        }
    }, [isAuthenticated]);

    const filteredCryptoData = cryptoData.filter((crypto) => {
        const isInFavorites = favorites.includes(crypto.id);
        return (!showOnlyFavorites || isInFavorites) &&
            (crypto.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                crypto.symbol.toLowerCase().includes(searchTerm.toLowerCase()));
    });
    const handleShowOnlyFavoritesToggle = () => {
        setShowOnlyFavorites(prevState => !prevState);
    };

    const index = filteredCryptoData.slice(indexOfFirst, indexOfLast);


    return (
        <>
            <div className="flex flex-col sm:flex-row mb-5 items-center justify-evenly">
                <BtnUpdateApiComponent isAuthenticated={isAuthenticated} />
                <div className='flex'>
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium sr-only text-white">Search</label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg className="w-4 h-4 text-gray-500 mt-4 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="search" id="default-search" value={searchTerm} onChange={handleChange} className="block sm:w-auto mt-4 w-full p-4 ps-10 text-sm border rounded-lg bg-gray-700 border-gray-600 focus:ring-blue-500 focus:border-blue-500 placeholder-gray-400 text-white" placeholder="Buscar por Nombre o Siglas" required />
                    </div>
                </div>
                <div className='flex items-center'>
                    <a href="#" className="text-blue-500 mt-4 hover:text-blue-600 flex items-center" onClick={handleShowOnlyFavoritesToggle}>
                        {iconFavorite}
                        Mostrar Solo Favoritos
                    </a>
                </div>

            </div>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm rtl:text-right text-gray-500 dark:text-gray-400  text-center">
                    <thead className="text-xs uppercase bg-gray-700 dark:text-gray-200">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Favorito
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Icono
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Rank
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
                        {index.map((crypto) => (
                            <tr key={crypto.id} className="border-b bg-gray-800 border-gray-700 text-white">
                                <td className="px-6 py-4">
                                    <div>
                                        <form onSubmit={(e) => handleFavoriteSubmit(e, crypto.id)}>
                                            <button type="submit" className="p-2 rounded-full">
                                                {favorites.includes(crypto.id) ? iconFavorite : noIconFavorite}
                                            </button>
                                        </form>
                                    </div>
                                </td>
                                <td className="px-6 py-4 flex justify-center">
                                    <img src={crypto.image} alt={crypto.name} className="w-8 h-8" />
                                </td>
                                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                    {crypto.market_cap_rank}
                                </td>
                                <td className="px-6 py-4">
                                    {crypto.name}
                                </td>
                                <td className="px-6 py-4">
                                    {crypto.symbol.toUpperCase()}
                                </td>
                                <td className="px-6 py-4">
                                    {crypto.current_price.toLocaleString()}€
                                    {crypto.current_price > (crypto.high_24h + crypto.low_24h) / 2 ? (
                                        <span className="text-green-500" style={{ fontSize: '1.5em' }}> &#8593;</span>
                                    ) : (
                                        <span className="text-red-500" style={{ fontSize: '1.5em' }}> &#8595;</span>
                                    )}
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
            </div>
        </>
    )
}

export default CryptoTableFormComponent;
