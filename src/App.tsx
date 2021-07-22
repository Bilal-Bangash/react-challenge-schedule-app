import React, { useEffect } from "react";
import "./App.css";
import { NavBar, Sidebar, Card } from "./components";
import { useDispatch, useSelector } from "react-redux";
import { getAllAppointments } from "./redux/actions";

function App() {
  const dispatch = useDispatch();
  const appointmentList = useSelector((state) => state.appointmentList);
  const { data: { appointments = [], doctors = [] } = {} } = appointmentList;
  useEffect(() => {
    // dispatching action for getting lists of all products
    dispatch(getAllAppointments());
  }, [dispatch]);
  return (
    <>
      <header>
        <NavBar />
      </header>
      <div className="container">
        <Sidebar />
        <main>
          {appointments &&
            Object.keys(appointments).map((appointment: any, index: number) => (
              <Card
                key={index}
                appointment={appointment}
                appointments={appointments}
                doctors={doctors}
              />
            ))}
        </main>
      </div>
    </>
  );
}

export default App;
