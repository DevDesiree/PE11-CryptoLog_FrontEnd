import React, { useEffect } from 'react';
import ApiCacheJson from '../../services/ApiCacheJson';
import Alerts from "../alerts-component/Alerts";

const BtnUpdateApiComponent = ({ isAuthenticated }) => {

    const sweetAlert = Alerts();

    const updateCryptocurrencies = async () => {
        try {
            sweetAlert.showLoadingAlert("Actualizando Criptomonedas", "Por favor, espere...");
            const response = await ApiCacheJson.updateCryptocurrencies();
            sweetAlert.showSuccessAlert("¡Actualización exitosa!", "Las criptomonedas han sido actualizadas correctamente.");
            
            setTimeout(() => {
              window.location.reload();
            }, 1000);
            
            console.log(response);
          } catch (error) {
            sweetAlert.showErrorAlert("Error!" , "Hubo un problema al actualizar las criptomonedas. Por favor, inténtelo de nuevo más tarde.")
          }
    };
    return (
        <button
            className={`text-white bg-gradient-to-r from-indigo-600 from-10% via-blue-500 to-90% to-sky-500 via-60% hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm mt-4 px-5 py-2.5 text-center ${!isAuthenticated ? 'opacity-50 cursor-not-allowed' : ''}`}
            onClick={updateCryptocurrencies}
            disabled={!isAuthenticated}
            title={!isAuthenticated ? 'Debes iniciar sesión para actualizar datos' : ''}
        >
            {isAuthenticated ? 'Actualizar Datos' : 'Inicia Sesión para Actualizar'}
        </button>
    )
}

export default BtnUpdateApiComponent