import React from 'react'
import Home from './Home/Home'
import Banner from './Banner/Banner'
import Flight from './Flight/Flight'
import Footer from './Footer/Footer'
import './App.css'

const App = () => {
  return (
    <div className='App'>
      <Home />
      <Banner />
      <Flight />
      <Footer />
    </div>
  )
}

export default App