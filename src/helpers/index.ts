// find and add patients & doctors in appointments array
export const combineAppointmentDoctorPatient = (
  appointments: [],
  patients: [],
  doctors: []
) => {
  return appointments.map((appointment: any) => {
    const matchedPatient = patients.find(
      (patient: { id: string }) => patient.id === appointment.patientID
    );
    const matchedDoctor = doctors.find(
      (doctor: { id: string }) => doctor.id === appointment?.doctorID
    );
    appointment["patient"] = matchedPatient && matchedPatient;
    appointment["doctor"] = matchedDoctor && matchedDoctor;
    return appointment;
  });
};
export const makeAppointmentGroups = (updateAppointments: any) => {
  return (
    updateAppointments.length &&
    updateAppointments.reduce(
      (
        acc: any,
        appointment: {
          status: string;
        }
      ) => {
        const { status } = appointment;

        acc[status] = [
          ...(acc[status] || []),
          {
            ...appointment,
          },
        ];
        return acc;
      },
      {}
    )
  );
};

export const sortAppointments = (
  appointmentGroupsSort: any,
  appointmentGroups: any
) => {
  Object.keys(appointmentGroups)
    .sort()
    .reverse()
    .forEach((key) => {
      appointmentGroupsSort[key] = appointmentGroups[key];
    });
};
