import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Doctor = ({ doctor }) => {
  return (
    <div className="card border-0">
      <div className="card-body text-center">
        <img src={`http://localhost:5000/${doctor.img}`} className="" style={{ height: "250px" }} alt="" />
        <div className=" ">
        <h6 className="font-weight-bold m-1 mt-3">{doctor.name}</h6>
        <p><FontAwesomeIcon className="m-1 color-group" icon={doctor.icon} />{doctor.phone}</p>
        </div>
      </div>
    </div>
  );
};

export default Doctor;
