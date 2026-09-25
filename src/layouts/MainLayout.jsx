import { Outlet } from "react-router-dom";
import Navbar from "../views/components/Navbar/Navbar.jsx";
import Footer from "../views/components/Footer/Footer.jsx";

export default function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-paper">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
