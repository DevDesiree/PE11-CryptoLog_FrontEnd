import React, { useState, useEffect } from 'react';
import ApiCacheJson from '../../services/ApiCacheJson';
import BackendFetchApi from '../../services/BackendFetchApi';

const CryptoTableFormComponent = ({ isAuthenticated }) => {

    const iconFavorite = <svg className="w-6 h-6 fill-current text-yellow-400 mr-1" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" /></svg>

    const noIconFavorite = <svg className="w-6 h-6 fill-current text-gray-400 mr-1" viewBox="0 0 576 512"><path d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z" /></svg>

    const [searchTerm, setSearchTerm] = useState('');
    const [favorites, setFavorites] = useState([]);
    const [cryptoData, setCryptoData] = useState([]);
    const [showOnlyFavorites, setShowOnlyFavorites] = useState(false);

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

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
            alert('Por favor inicia sesión para agregar criptomonedas a favoritos.');
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
    }, []); // Se ejecuta solo una vez al montar el componente

    useEffect(() => {
        const fetchUserFavorites = async () => {
            try {
                const userFavorites = await BackendFetchApi.getFavoriteCoin();
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
                <div className='flex items-center'>
                    <a href="#" className="text-blue-500 hover:text-blue-600 flex items-center" onClick={handleShowOnlyFavoritesToggle}>
                        {iconFavorite}
                        Mostrar Solo Favoritos
                    </a>
                </div>

            </div>
            <div className="relative overflow-x-auto">
                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                Icono
                            </th>
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
                                <td className="px-6 py-4">
                                    <div>
                                        <form onSubmit={(e) => handleFavoriteSubmit(e, crypto.id)}>
                                            <button type="submit" className="p-2 rounded-full">
                                                {favorites.includes(crypto.id) ? iconFavorite : noIconFavorite}
                                            </button>
                                        </form>
                                    </div>
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
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default CryptoTableFormComponent;
