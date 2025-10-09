import { NavLink, Outlet } from "react-router"
import { useCart } from "../hooks/useCart"
import { useScrollToTop } from "../hooks/useScrollToTop"
import Header from "./Header"
import Footer from "./Footer"
import Cart from "../pages/Cart"
import "./Layout.css"

export default function Layout() {

    const activeStyles = {
        fontWeight: "bold",
        textDecoration: "none",
        color: "#161616"

    }

    const { cartItems } = useCart()

    useScrollToTop()

    return (

        <div className="body-container">
            <Header >

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
            </Header>

            <main>
                {cartItems.length > 0 ?
                    <Cart /> : null}

                <Outlet />
            </main>

            <Footer />
        </div>

    )
};

