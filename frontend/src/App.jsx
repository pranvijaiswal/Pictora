import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Result from './pages/Result'
import BuyCredit from './pages/BuyCredit'
import Navbar from './components/Navbar'

const App = () => {
  return (
    <div className="px-4 sm:px-8 md:px-16 lg:px-24
    min-h-screen bg-gradient-to-b frm-teal-50 to-orange-50
    ">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result" element={<Result />} />
        <Route path="/buycredit" element={<BuyCredit />} />
      </Routes>

    </div>
  )
}

export default App