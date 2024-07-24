import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { ThemeProvider } from 'next-themes';
import Chatbot from "./components/Chatbot";
import Index from "./pages/Index.jsx";
import UserManagement from "./pages/UserManagement.jsx";
import IntegrationManagement from "./pages/IntegrationManagement.jsx";
import SystemMonitoring from "./pages/SystemMonitoring.jsx";
import Reporting from "./pages/Reporting.jsx";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import AdminPanel from "./pages/AdminPanel.jsx";
import ManagerDashboard from "./pages/ManagerDashboard.jsx";
import CashierPOS from "./pages/CashierPOS.jsx";
import ProductManagement from "./pages/ProductManagement.jsx";
import QRCodePayments from "./pages/QRCodePayments.jsx";
import UserAccountManagement from "./pages/UserAccountManagement.jsx";
import RiderApplication from "./pages/RiderApplication.jsx";
import EWalletManagement from "./pages/EWalletManagement.jsx";
import Ordering from "./pages/Ordering.jsx";
import FundTransfers from "./pages/FundTransfers.jsx";
import Sidebar from "./components/layouts/sidebar.jsx";
import { useState } from "react";

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <ThemeProvider attribute="class">
      <Chatbot />
      <Router>
        <div className="flex">
          <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
          <div className={`flex-1 transition-all duration-300 ${isSidebarOpen ? 'ml-64' : 'ml-16'}`}>
            <Navbar pageTitle="Home" />
            <main className="p-4">
              <Routes>
                <Route exact path="/" element={<Index />} />
                <Route exact path="/user-management" element={<UserManagement />} />
                <Route exact path="/integration-management" element={<IntegrationManagement />} />
                <Route exact path="/system-monitoring" element={<SystemMonitoring />} />
                <Route exact path="/reporting" element={<Reporting />} />
                <Route exact path="/admin-panel" element={<AdminPanel />} />
                <Route exact path="/manager-dashboard" element={<ManagerDashboard />} />
                <Route exact path="/cashier-pos" element={<CashierPOS />} />
                <Route exact path="/product-management" element={<ProductManagement />} />
                <Route exact path="/qr-code-payments" element={<QRCodePayments />} />
                <Route exact path="/user-account-management" element={<UserAccountManagement />} />
                <Route exact path="/rider-application" element={<RiderApplication />} />
                <Route exact path="/e-wallet-management" element={<EWalletManagement />} />
                <Route exact path="/ordering" element={<Ordering />} />
                <Route exact path="/fund-transfers" element={<FundTransfers />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;