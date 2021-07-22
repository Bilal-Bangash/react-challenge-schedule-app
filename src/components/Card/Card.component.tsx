import React, { Fragment, FC } from "react";
import "./Card.css";

export interface CardProps {
  appointment: any;
}

const Card: FC<CardProps> = ({ appointment }) => {
  const handleCancelClick = () => {
    //work in-progress
    console.log("%cButton Clicked", "color:green;font-size:30px;");
  };

  return (
    <Fragment>
      <div>
        <h3>NEW</h3>
        <div className="card-container">
          <div className="child-width">
            <div>
              <b>Patient: </b>
              {appointment.patientID}{" "}
            </div>
            <div>
              <img width="100px" src="/charmander.png" alt="charmander" />{" "}
            </div>
          </div>
          <div className="child-width">
            <div>
              <b>Date: </b>
              {new Date(appointment.requestedDate).toDateString()}
            </div>
            <div className="pt-5">
              <b>Reason: </b>
              <br />
              {appointment.requestReason}
            </div>
            <div className="pt-5 pb-5">
              <b>Actions: </b>
              <button onClick={() => handleCancelClick()}>Cancel</button>
            </div>
          </div>
          <div className="child-width">
            <b>Doctor: </b>
            {appointment.doctorID ? appointment.doctorID : "Unassigned"}
          </div>
        </div>
      </div>
      <hr />
    </Fragment>
  );
};

export default Card;
