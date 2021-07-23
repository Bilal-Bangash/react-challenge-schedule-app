import React, { useState } from "react";
import { Card } from "../components";
import { useDispatch } from "react-redux";
import {
  getAllAppointments,
  confirmAppointment,
  deleteAppointment,
} from "../redux/actions";

export interface AppointmentsProps {
  appointments: object;
  doctors: any;
}

const Appointments: React.FC<AppointmentsProps> = ({
  appointments,
  doctors,
}) => {
  const [doctorID, setDoctorID] = useState<number>();
  const [appointmentId, setAppointmentID] = useState<number>();

  const dispatch = useDispatch();
  const handleCancelClick = (appointmentID: number) => {
    const reason = prompt("Please Enter Reason");
    if (!reason) return alert("Enter Reason First!!");
    dispatch(deleteAppointment(appointmentID, reason));
    dispatch(getAllAppointments());
  };

  const handleConfirmClick = (appointmentID: number) => {
    if (!doctorID || appointmentID !== appointmentId)
      return alert("Select Doctor First");

    dispatch(confirmAppointment(appointmentID, doctorID));
    dispatch(getAllAppointments());
    setDoctorID(undefined);
    setAppointmentID(undefined);
  };
  return (
    <React.Fragment>
      {Object.keys(appointments).map((appointment: string, index: number) => (
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
