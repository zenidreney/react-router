import { NavLink, Outlet } from "react-router"
import Cart from "../pages/Cart"

export default function Layout() {

    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "none",
        color: "#DBD5A4"

    }

    return (
        <main className="main-container">

            <header>
                <h1>Mock E-Plant Shop</h1>
            </header>
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

            <Cart />

            <Outlet />

        </main>

    )
};