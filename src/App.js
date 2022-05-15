import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import TripsList from "./components/TripsList";
import TripDetail from "./components/TripDetail";
import { Route, Routes } from "react-router-dom";
const detailId = 2;
function App() {
  return (
    <div id="page-top">
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="tripslist" element={<TripsList />} />
        <Route path="details/:detailId" element={<TripDetail />} />
      </Routes>
    </div>
  );
}

export default App;
