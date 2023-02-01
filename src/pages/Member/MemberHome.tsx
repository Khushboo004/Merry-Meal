import React from 'react'
import AvaliableMeal from '../../components/Public/Home/AvaliableMeal'
import AvailableFruit from '../../components/Public/Home/AvailableFruit'
import AvailableCareGiver from '../../components/Public/Home/AvailableCareGiver'

const MemberHome = () => {
  return (
    <div>
        <AvaliableMeal />
        <AvailableFruit />
        <AvailableCareGiver />
    </div>
  )
}

export default MemberHome