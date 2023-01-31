import React from 'react'
import Navbar from '../components/Layout/Navbar/Navbar'
import Content from '../components/Content'
import Footer from '../components/Layout/Footer/Footer'

const Home = () => {
  return (
    <div>
             
       <Navbar />
       <div >
        <Content />
    
       </div>

      <Footer />
    </div>
  )
}

export default Home