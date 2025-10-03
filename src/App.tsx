import { BrowserRouter, Routes, Route, NavLink, Outlet } from "react-router";

import './App.css'

function Layout() {

  const activeStyles = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "red"
  }

  return (
    <div>

      <h1>React Router Template</h1>
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
      </nav>
      <Outlet />
    </div>

  )
};

function Home() {
  return (
    <p>I am home</p>
  )
}

function About() {
  return (
    <p>I am About</p>
  )
}

function Contact() {
  return (
    <p>I am Contact</p>
  )
}

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
          </Route>


        </Routes>

      </BrowserRouter>

    </>
  )
}

export default App
