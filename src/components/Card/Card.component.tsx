import React, { Fragment } from "react";
import "./Card.css";

export interface CardProps {
  appointments: any;
  appointment: string;
  doctors: [];
  handleConfirmClick: (id: number) => void;
  handleCancelClick: (id: number) => void;
  setAppointmentID: any;
  setDoctorID: any;
}

export interface GenericTypes {
  id: number;
  name: string;
  photoURL: string;
}
export interface AppointmentTypeItem {
  id: number;
  doctor: GenericTypes;
  patient: GenericTypes;
  status: string;
  requestedDate: Date;
  requestReason: string;
  statusReason: string;
}

const Card: React.FunctionComponent<CardProps> = ({
  appointment,
  appointments,
  doctors,
  handleCancelClick,
  handleConfirmClick,
  setAppointmentID,
  setDoctorID,
}) => {
  return (
    <Fragment>
      <div>
        <h3>{appointment.toUpperCase()}</h3>
        {appointments[appointment].map(
          (item: AppointmentTypeItem, index: number) => (
            <div
              key={index}
              className={`${
                item.status === "completed" || item.status === "cancelled"
                  ? "card-container card-disabled"
                  : "card-container"
              }`}
            >
              <div className="child-width">
                <div>
                  <b>Patient: </b>
                  {item.patient.name}{" "}
                </div>
                <div>
                  <img
                    width="100px"
                    src={item.patient.photoURL}
                    alt={item.patient.name}
                  />{" "}
                </div>
              </div>
              <div className="child-width">
                <div>
                  <b>Date: </b>
                  {new Date(item.requestedDate).toDateString()}
                </div>
                <div className="pt-5">
                  <b>Reason: </b>
                  <br />
                  {item.requestReason}
                </div>
                {(item.status === "new" || item.status === "confirmed") && (
                  <div className="pt-5 pb-5">
                    <b>Actions: </b>
                    <button onClick={() => handleCancelClick(item.id)}>
                      Cancel
                    </button>
                    {item.status === "new" && (
                      <button
                        style={{ marginLeft: "5px" }}
                        onClick={() => handleConfirmClick(item.id)}
                      >
                        Confirm
                      </button>
                    )}
                  </div>
                )}
                {(item.status === "cancelled" ||
                  item.status === "completed") && (
                  <div className="pt-5 pb-5">
                    {item.status === "cancelled" ? (
                      <b>Reason of Cancellation: </b>
                    ) : (
                      <b>Diagnosis</b>
                    )}
                    <br />
                    {item.statusReason}
                  </div>
                )}
              </div>
              <div className="child-width">
                <b>Doctor: </b>
                {item.status === "new" ? (
                  <select
                    name="select"
                    onChange={(event) => {
                      setDoctorID(event.target.value);
                      setAppointmentID(item.id);
                    }}
                  >
                    <option selected disabled>
                      Unassigned
                    </option>
                    {doctors.map((doctor: GenericTypes, index: number) => {
                      return (
                        <option key={index} value={doctor.id}>
                          {doctor.name}
                        </option>
                      );
                    })}
                  </select>
                ) : (
                  item.doctor && item.doctor.name
                )}
              </div>
            </div>
          )
        )}
      </div>
      <hr />
    </Fragment>
  );
};

export default Card;
