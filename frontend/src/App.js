import React from 'react'
import Home from './pages/Home'
import { Route, Routes } from 'react-router-dom'
import AddTransaction from './pages/AddTransaction'
import UpdateTransaction from './pages/UpdateTransaction'
import Chart from './pages/Chart'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/'  Component={Home} />
        <Route path='/add'  Component={AddTransaction} />
        <Route path='/update/:id'  Component={UpdateTransaction} />
        <Route path='/chart'  Component={Chart} />
      </Routes>
    </div>
  )
}

export default App