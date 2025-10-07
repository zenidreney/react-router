import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import type { Herb } from "../data";
import type { CartItem } from "../context/CartContext"


function useCart() {
    const context = useContext(CartContext)
    if (!context) {
        throw new Error("Please use useCart in CartContextProvider")
    }
    const { cartItems, setCartItems } = context

    function addToCart(herb: Herb) {

        if (!herb) {
            return
        }
        setCartItems(prev => {

            const existingCartItem = prev.find(item => item.name === herb.name)

            if (existingCartItem) {
                return prev.map(item => {
                    return item.name === herb.name
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                })
            } else return herb ? [...prev, { ...herb, quantity: 1 }] : prev
        })
    }

    function removeFromCart(herb: CartItem) {

        if (!herb) {
            return
        }

        setCartItems(prev => {
            const existingCartItem = prev.find(item => item.name === herb.name)

            if (!existingCartItem) {
                return prev
            }

            if (existingCartItem.quantity > 1) {
                return prev.map(item => {
                    return item.name === herb.name ?
                        { ...item, quantity: item.quantity - 1 } :
                        item
                })
            } else {
                return prev.filter(item => {
                    return item.name !== herb.name
                })
            }
        })

    }


    return { cartItems, setCartItems, addToCart, removeFromCart }

}

export { useCart }