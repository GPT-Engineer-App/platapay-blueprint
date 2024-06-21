import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Index from "./pages/Index.jsx";
import UserManagement from "./pages/UserManagement.jsx";
import IntegrationManagement from "./pages/IntegrationManagement.jsx";
import SystemMonitoring from "./pages/SystemMonitoring.jsx";
import Reporting from "./pages/Reporting.jsx";
import Navbar from "./components/Navbar.jsx";
import AdminPanel from "./pages/AdminPanel.jsx";
import ManagerDashboard from "./pages/ManagerDashboard.jsx";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Index />} />
        <Route exact path="/user-management" element={<UserManagement />} />
        <Route exact path="/integration-management" element={<IntegrationManagement />} />
        <Route exact path="/system-monitoring" element={<SystemMonitoring />} />
        <Route exact path="/reporting" element={<Reporting />} />
        <Route exact path="/admin-panel" element={<AdminPanel />} />
        <Route exact path="/manager-dashboard" element={<ManagerDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;