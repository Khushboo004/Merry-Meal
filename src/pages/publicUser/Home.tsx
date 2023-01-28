import React from 'react';
import Pic from "../../assets/public/home.jpeg"
import Navbar from '../../components/Layout/Navbar/Navbar';
import AvaliableMeal from '../../components/Public/Home/AvaliableMeal';
import Funds from '../../components/Public/Home/Funds';
import Footer from '../../components/Layout/Footer/Footer';

const Home = () => {
  return (
    <div>
        <Navbar />

        {/* Hero Banner */}
           <div className='w-full  py-6  '>
        <div className='max-w-[1240px] mx-auto grid md:grid-cols-2 justify-between items-center'>
            <img className='w-[400px] mx-auto my-4' src={Pic} alt="/" />
            <div className='m-2 p-2 text-center'>
                <p className='text-[#00df9a] font-bold uppercase text-xl'>merry meal</p>
                <h1 className='md:text-3xl sm:text-2xl text-1xl font-bold'>Merry Meal is friend of humunity, humunity is friend of civilizations </h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit inventore recusandae excepturi itaque cumque similique blanditiis, qui at voluptatem vel voluptas, voluptate aliquam quidem, commodi eveniet dicta aspernatur nulla nam!</p>
                <div className=''>
                <button className=' bg-[#00df9a] hover:bg-[#359476] w-[200px]  text-xl text-black rounded-md my-6 mx-auto py-3'> Get Started</button>

                </div>
            </div>
        </div>
    </div>
    <AvaliableMeal />
    <Funds />
      
    <Footer />
  

    </div>
  )
}

export default Home