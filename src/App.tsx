import { BrowserRouter, Routes, Route } from "react-router";
import { CartContextProvider } from "./context/CartContext";

import Layout from "./components/Layout";
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Products from "./pages/Products"
import ProductDetails from "./pages/ProductDetails"
import NotFound from "./pages/NotFound"
import Checkout from "./pages/Checkout";
import ThankYou from "./pages/ThankYou";

import "./App.css"

function App() {

  return (
    <>
      <CartContextProvider>
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
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/thank-you" element={<ThankYou />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </>
  )
}

export default App
