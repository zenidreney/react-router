
import { useState, createContext, type ReactNode } from "react"
import type { Herb } from "../data";
import type { Dispatch, SetStateAction } from "react";

 
type CartContextType = {
    cartItems: Herb[],
    setCartItems: Dispatch<SetStateAction<Herb[]>>
}

type CartContextProviderProps = {
    children: ReactNode;
}

const CartContext = createContext<CartContextType | undefined>(undefined)

function CartContextProvider({ children }: CartContextProviderProps) {

    const [cartItems, setCartItems] = useState<Herb[]>([])


    return (
        <CartContext.Provider value={{ cartItems, setCartItems }}>
            {children}
        </CartContext.Provider>
    )


}

export { CartContext, CartContextProvider }