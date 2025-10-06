import { useContext } from "react"
import { CartContext } from "../context/CartContext"

function useCart() {
    const context = useContext(CartContext)
    if(!context) {
        throw new Error("Please use useCart in CartContextProvider")
    }
    return context

}

export { useCart }