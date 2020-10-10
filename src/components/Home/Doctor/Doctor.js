import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Doctor = ({ doctor }) => {
  return (
    <div className="card border-0">
      <div className="card-body text-center">
        <img src={doctor.img} className="" style={{ height: "250px" }} alt="" />
        <div className=" ">
        <h6 className="font-weight-bold m-1 mt-3">{doctor.name}</h6>
        <p><FontAwesomeIcon style={{color: '#1CC7C1'}} className="m-1" icon={doctor.icon} />{doctor.phone}</p>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
