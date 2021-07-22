import { useEffect } from "react";
import "./App.css";
import { NavBar, Sidebar, Loader } from "./components";
import { Appointments } from "./screens";
import { useDispatch, useSelector } from "react-redux";
import { getAllAppointments } from "./redux/actions";

function App() {
  const dispatch = useDispatch();
  const appointmentList = useSelector((state) => state.appointmentList);
  const { data: { appointments = [], doctors = [] } = {}, loading = false } =
    appointmentList;
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
          {loading && (
            <div className="loader-wrapper">
              <Loader />
            </div>
          )}
          {appointments && (
            <Appointments appointments={appointments} doctors={doctors} />
          )}
        </main>
      </div>
    </>
  );
}

export default App;
