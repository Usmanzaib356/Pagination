import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Pagination from './Components/Pagination'

function App() {
  return (
    <>
       <Routes>
         <Route path="/"  element={<Pagination/>} />  
       </Routes>
    </>
  )
}

export default App