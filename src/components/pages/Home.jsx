import React from 'react'
import CryptoTableFormComponent from '../crypto-table-form-component/CryptoTableFormComponent'


const Home = ({ isAuthenticated }) => {
  return (
    <>
      <section className="h-[230px] bg-center bg-no-repeat bg-cover bg-[url('/src\assets\images\banner-cryptolog.jpeg')] bg-gray-700 bg-blend-multiply mb-5">
        <div className="px-4 mx-auto max-w-screen-lg text-center py-10 lg:py-30">
          <h1 className="mb-4 text-3xl font-extrabold tracking-tight leading-none text-white md:text-4xl lg:text-5xl">Explora CryptoLog</h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-38">Descubre y sigue de cerca tus criptomonedas favoritas. Gestiona transacciones fácilmente y mantente actualizado con las últimas tendencias del mercado.</p>
        </div>
      </section>
      <CryptoTableFormComponent isAuthenticated={isAuthenticated} />
    </>
  )
}

export default Home