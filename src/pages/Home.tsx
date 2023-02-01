import React from 'react'
import Navbar from '../components/Layout/Navbar/Navbar'
import Content from '../components/Content'
import Footer from '../components/Layout/Footer/Footer'
type Props = {
  role: String;
};
function Home(props: Props) {
  const { role } = props;
  return (
    <div>
             
       <Navbar role={role}/>
       <div >
        <Content />
    
       </div>

      <Footer />
    </div>
  )
}

export default Home