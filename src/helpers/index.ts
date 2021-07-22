// find and add patients & doctors in appointments array
export const combineAppointmentDoctorPatient = (
  appointments: any,
  patients: any,
  doctors: any
) => {
  return appointments.map((appointment: any) => {
    const matchedPatient = patients.find(
      (patient: any) => patient.id === appointment.patientID
    );
    const matchedDoctor = doctors.find(
      (doctor: any) => doctor.id === appointment?.doctorID
    );
    appointment["patient"] = matchedPatient && matchedPatient;
    appointment["doctor"] = matchedDoctor && matchedDoctor;
    return appointment;
  });
};
export const makeAppointmentGroups = (updateAppointments: any) => {
  return (
    updateAppointments.length &&
    updateAppointments.reduce((acc: any, appointment: any) => {
      const { status } = appointment;

      acc[status] = [
        ...(acc[status] || []),
        {
          ...appointment,
        },
      ];
      return acc;
    }, {})
  );
};
