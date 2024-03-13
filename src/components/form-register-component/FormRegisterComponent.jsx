import React from 'react'

const FormRegisterComponent = () => {
    return (
        <div>
            <form className="max-w-3xl mx-auto rounded-lg p-6 bg-customDark shadow-2xl sm:rounded-3xl dark:border-gray-600 my-7">
                <h1 className='mb-5 text-white text-lg'>¿No tienes cuenta? Regístrate!</h1>
                <div className="mb-5">
                    <label for="name" className="block mb-2 text-sm font-medium text-white ">Nombre</label>
                    <input type="text" id="name" className="bg-gray-500 bg-opacity-20 border border-opacity-20 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Coder" required />
                </div>
                <div className="mb-5">
                    <label for="email" className="block mb-2 text-sm font-medium text-white ">Email</label>
                    <input type="text" id="email" className="bg-gray-500 bg-opacity-20 border border-opacity-20 border-gray-300 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="femcoder@hotmail.com" required />
                </div>
                <div className="mb-5">
                    <label for="password" className="block mb-2 text-sm font-medium text-white">Contraseña</label>
                    <input type="password" id="password" className="bg-gray-500 bg-opacity-20 border border-opacity-20 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500"  placeholder='*******' required />
                </div>
                <div className="mb-5">
                    <label for="confirm_password" className="block mb-2 text-sm font-medium text-white">Confirmar Contraseña</label>
                    <input type="password" id="confirm_password" className="bg-gray-500 bg-opacity-20 border border-opacity-20 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder='*******' required />
                </div>
                <button type="submit" className="text-white bg-gradient-to-r from-indigo-600 from-10% via-blue-500 to-90% to-sky-500 via-60%  hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center">Registrar</button>
            </form>
        </div>
    )
}

export default FormRegisterComponent