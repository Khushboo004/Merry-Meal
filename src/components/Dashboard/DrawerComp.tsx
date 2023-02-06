import React from "react";

import PartnerDrawerComp from "./Partner/PartnerDrawerComp";
import CargiverDrawerComp from "./CareGiver/CargiverDrawerComp";
import AdminDrawerComp from "./Admin/AdminDrawerComp";
import RiderDrawerComp from "./Rider/RiderDrawerComp";
import VolunteerDrawerComp from "./Volunteer/VolunteerDrawerComp";

type Props = {
  role: String;
};

const DrawerComp = (props: Props) => {
  const { role } = props;
  return (
    <>
      {role === "ADMIN" && window.location.toString().includes("admin") ? (
        <AdminDrawerComp />
      ) : (
        <></>
      )}

      {role === "PARTNER" ? <PartnerDrawerComp /> : <></>}
      {role === "CAREGIVER" ? <CargiverDrawerComp /> : <></>}

      {role === "RIDER" ? <RiderDrawerComp /> : <></>}

      {role === "VOLUNTEER" ? <VolunteerDrawerComp /> : <></>}
    </>
  );
};

export default DrawerComp;
