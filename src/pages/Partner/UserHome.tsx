import React from 'react'
import Dashboard from '../Dashboard'
import AvaliableMeal from '../../components/Public/Home/AvaliableMeal'
import Funds from '../../components/Public/Home/Funds';
import AvailableFruit from '../../components/Public/Home/AvailableFruit';
type Props = {
  role: String;
};
const UserHome = (props: Props) => {
  const { role } = props;
  
  return (
    <div>
        <AvaliableMeal />
        <AvailableFruit role={role}/>
        
    </div>
  )
}

export default UserHome