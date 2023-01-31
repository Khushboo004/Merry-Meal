import React from 'react'
import Dashboard from './Dashboard'
import AvaliableMeal from '../../components/Public/Home/AvaliableMeal'
import Funds from '../../components/Public/Home/Funds';
type Props = {};
const UserHome = (props: Props) => {
  return (
    <div>
        <AvaliableMeal />
        <Funds />
        
    </div>
  )
}

export default UserHome