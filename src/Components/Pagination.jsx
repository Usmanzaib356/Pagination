import React from 'react'
import Header from './Header'
import Heading from './Heading'
import Cards from './Cards'

function Pagination() {
  return (
    <>
      <section className='bg-slate-950 min-h-full '>
        <div className='flex flex-col gap-20 mx-12'>
          <Header></Header>
          <Heading></Heading>
          <Cards></Cards> 
        </div>
        <br />
      <br />
      <br />
      <br />
      </section>
      
    </>
  )
}

export default Pagination