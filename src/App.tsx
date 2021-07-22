import React, { useEffect } from "react";
import "./App.css";
import { NavBar, Sidebar, Card } from "./components";
import { useDispatch, useSelector } from "react-redux";
import { getAllAppointments } from "./redux/actions";

function App() {
  const dispatch = useDispatch();
  const appointmentList = useSelector((state) => state.appointmentList);
  const { data: { appointments = [] } = {} } = appointmentList;
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
            appointments.map((appointment) => (
              <Card appointment={appointment} />
            ))}
        </main>
      </div>
    </>
  );
}

export default App;
