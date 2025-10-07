
import { useState, createContext, type ReactNode } from "react"
import type { Herb } from "../data";
import type { Dispatch, SetStateAction } from "react";

type CartItem = Herb & { quantity: number }
 
type CartContextType = {
    cartItems: CartItem[]
    setCartItems: Dispatch<SetStateAction<CartItem[]>>
}

type CartContextProviderProps = {
    children: ReactNode;
}

const CartContext = createContext<CartContextType | undefined>(undefined)

function CartContextProvider({ children }: CartContextProviderProps) {

    const [cartItems, setCartItems] = useState<CartItem[]>([])

    return (
        <CartContext.Provider value={{ cartItems, setCartItems }}>
            {children}
        </CartContext.Provider>
    )


}

export { CartContext, CartContextProvider, type CartItem }