import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import CourseDetail from "./pages/CourseDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
// import FAQ from "./pages/Faq";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Checkout from "./pages/CheckoutPack";
import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";
import CheckoutCourse from "./pages/CheckoutCourse";
import CheckoutPackage from "./pages/CheckoutPack";

const router = createBrowserRouter([
  {
    path: "/",
    element:
    <>
    <Navbar />
        <main className="flex flex-col min-h-screen py-14">
          <Home />
        </main>
        <Footer />
        </>
  },
  {
    element: <MainLayout />,
    children: [
      { path: "/courses", element: <Courses /> },
      { path: "/courses/:id", element: <CourseDetail /> },
      { path: "/courses/checkout/:id", element: <CheckoutCourse />},
      { path: "/about", element: <About /> },
      { path: "/contact", element: <Contact /> },
      { path: "/package/:id", element: <Checkout /> },
      { path: "/package/checkout/:id", element: <CheckoutPackage /> },
      { path: "/blog", element: <Blog /> },
      { path: "/blog/:id", element: <BlogDetail /> }
    ],
  },
]);

export default function App() {
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}
