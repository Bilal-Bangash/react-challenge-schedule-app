import React, { useState } from "react";
import { Card } from "../components";
import { useDispatch } from "react-redux";
import {
  getAllAppointments,
  confirmAppointment,
  deleteAppointment,
} from "../redux/actions";

const Appointments = (props: any) => {
  const { appointments, doctors } = props;
  const [doctorID, setDoctorID] = useState("");
  const [appointmentId, setAppointmentID] = useState("");

  const dispatch = useDispatch();
  const handleCancelClick = (appointmentID: any) => {
    const reason = prompt("Please Enter Reason");
    if (!reason) return alert("Enter Reason First!!");
    dispatch(deleteAppointment(appointmentID, reason));
    dispatch(getAllAppointments());
  };

  const handleConfirmClick = (appointmentID: any) => {
    if (!doctorID || appointmentID !== appointmentId)
      return alert("Select Doctor First");

    dispatch(confirmAppointment(appointmentID, doctorID));
    dispatch(getAllAppointments());
    setDoctorID("");
  };
  return (
    <React.Fragment>
      {Object.keys(appointments).map((appointment: any, index: number) => (
        <Card
          key={index}
          doctors={doctors}
          appointment={appointment}
          setDoctorID={setDoctorID}
          appointments={appointments}
          setAppointmentID={setAppointmentID}
          handleCancelClick={handleCancelClick}
          handleConfirmClick={handleConfirmClick}
        />
      ))}
    </React.Fragment>
  );
};

export default Appointments;
