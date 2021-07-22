import "./App.css";
import { NavBar, Sidebar, Card } from "./components";
import { API_ROOT, GET, GET_ALL_APPOINTMENTS } from "./constants";
import { useQuery } from "./hooks";

function App() {
  const { error, data } = useQuery({
    endpoint: `${API_ROOT}${GET_ALL_APPOINTMENTS}`,
    method: GET,
  });
  // for testing purpose will remove later
  console.log("%cData", "color:green;font-size:30px;", data, error);
  return (
    <>
      <header>
        <NavBar />
      </header>
      <div className="container">
        <Sidebar />
        <main>
          <Card />
        </main>
      </div>
    </>
  );
}

export default App;
