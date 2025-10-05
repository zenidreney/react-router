import { BrowserRouter, Routes, Route, NavLink, Outlet } from "react-router";
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Products from "./pages/Products"
import ProductDetails from "./pages/ProductDetails"
import NotFound from "./pages/NotFound"
import "./App.css"

function Layout() {

  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "red"
  }

  return (
    <main className="main-container">

      <h1>Mock E-Plant Shop</h1>
      <nav>
        <NavLink to="/" style={({ isActive }) => isActive ? activeStyles : undefined}>
          Home
        </NavLink>
        <NavLink to="/about" style={({ isActive }) => isActive ? activeStyles : undefined}>
          About
        </NavLink>
        <NavLink to="/contact" style={({ isActive }) => isActive ? activeStyles : undefined}>
          Contact
        </NavLink>
        <NavLink to="/products" style={({ isActive }) => isActive ? activeStyles : undefined}>
          Products
        </NavLink>
      </nav>
      <Outlet />
    </main>

  )
};


function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="products" element={<Products />} />
            <Route path="products/:herbname" element={<ProductDetails />} />

            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
