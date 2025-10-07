import { NavLink, Outlet } from "react-router"
import Cart from "../pages/Cart"
import { useCart } from "../hooks/useCart"

export default function Layout() {

    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "none",
        color: "#161616"

    }

    const { cartItems } = useCart()

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

            {cartItems.length > 0 ?
                <Cart /> : null }

            <Outlet />

        </main>

    )
};