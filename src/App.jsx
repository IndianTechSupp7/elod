import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NoPage from "./pages/NoPage";
import Navbar from "./components/navbar";
import OpenPage from "./pages/OpenPage";
import RegistationPage from "./pages/RegistationPage";
import EquipmentPage from "./pages/EquipmentPage";
import Trainers from "./pages/TrainersPage";

function App() {
  return (
    <>
      <Navbar />
      <main className="main-content bg-background h-[100vh] text-text">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/open" element={<OpenPage />} />
          <Route path="/register" element={<RegistationPage />} />
          <Route path="/equipment" element={<EquipmentPage />} />
          <Route path="/trainers" element={<Trainers />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
