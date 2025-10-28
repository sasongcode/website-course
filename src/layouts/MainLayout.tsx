import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollTop";

export default function MainLayout() {
    return (
        <div className="flex flex-col min-h-screen">
            <ScrollToTop />
            <Navbar />
            <main className="flex-1 pt-16">
                <Outlet />
            </main>
            <Footer />
        </div>
    )
}