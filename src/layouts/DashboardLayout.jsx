import { Outlet } from "react-router-dom";
import AuthProvider from "../providers/AuthProvider";
import "./dashboard.css";
import Sidebar from "../components/UserSidebar";

export default function DashboardLayout() {
  return (
    <AuthProvider>
      <main>
        <Sidebar />
        <Outlet />
      </main>
    </AuthProvider>
  );
}
