import React from 'react'
import AvaliableMeal from '../../components/Public/Home/AvaliableMeal'
import AvailableFruit from '../../components/Public/Home/AvailableFruit'
import AvailableCareGiver from '../../components/Public/Home/AvailableCareGiver'
type Props = {
  role: String;
};

const MemberHome  = (props: Props) => {
  const { role } = props;
  return (
    <div>
        <AvaliableMeal />
        <AvailableFruit role={role}/>
        <AvailableCareGiver  role={role} />
    </div>
  )
}

export default MemberHome