import React from 'react'
import HistoricalComponent from '../historical-component/HistoricalComponent'

const HistoricalPage = ({isAuthenticated}) => {
    return (
        <>  
        {!isAuthenticated ? (
            <div>
                <h1 className='text-center text-4xl bg-red-500'>Debes iniciar sesión para ver este contenido.</h1>
            </div>
        ) : (
            <>
                <div><h1 className='text-white flex justify-center text-3xl mt-5'>Historial</h1></div>
                <HistoricalComponent />
            </>
        )}
    </>
    )
}

export default HistoricalPage