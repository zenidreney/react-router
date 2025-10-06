import { NavLink, Outlet } from "react-router"
import Cart from "../pages/Cart"

export default function Layout() {

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

            <Cart />

            <Outlet />
            
        </main>

    )
};