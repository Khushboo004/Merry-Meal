import React from 'react'
import Dashboard from '../Dashboard'
import AvaliableMeal from '../../components/Public/Home/AvaliableMeal'
import Funds from '../../components/Public/Home/Funds';
import AvailableFruit from '../../components/Public/Home/AvailableFruit';
type Props = {};
const UserHome = (props: Props) => {
  
  return (
    <div>
        <AvaliableMeal />
        <AvailableFruit />
        
    </div>
  )
}

export default UserHome