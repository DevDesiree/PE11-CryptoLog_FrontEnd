import React from 'react'
import CryptoTableFormComponent from '../crypto-table-form-component/CryptoTableFormComponent'


const Home = ({isAuthenticated}) => {
  return (
    <>
      <section className="h-[300px] bg-center bg-no-repeat bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/conference.jpg')] bg-gray-700 bg-blend-multiply mb-5">
        <div className="px-4 mx-auto max-w-screen-lg text-center py-24 lg:py-30">
          <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">We invest in the world’s potential</h1>
          <p className="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
        </div>
      </section>
      <CryptoTableFormComponent isAuthenticated={isAuthenticated}/>
    </>
  )
}

export default Home