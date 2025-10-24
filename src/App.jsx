import React from 'react'
import MyRouter from './Components/MyRouter'
import Home from './Pages/Home'
import Settings from './Pages/Settings'
import Usage from './Pages/Usage'
import Chart from './Pages/Chart'

function App() {
  return (
    <div>
      <a href='home'> Home </a>
      <a href='usage'> Usage </a>
      <a href='settings'> Settings </a>
      <a href='chart'> Chart </a>
      <MyRouter >
        <Home path="home" /> 
        <Usage path="usage" />
        <Settings path="settings" />
        <Chart path="chart" />
      </MyRouter>
    </div>
  )
}

export default App