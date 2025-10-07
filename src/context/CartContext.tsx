
import { useState, createContext, type ReactNode } from "react"
import type { Herb } from "../data";
import type { Dispatch, SetStateAction } from "react";

type CartItem = Herb & { quantity: number }
type FormData = {
    name: string,
    password: string,
    cardNo: string
}

type CartContextType = {
    cartItems: CartItem[]
    setCartItems: Dispatch<SetStateAction<CartItem[]>>
    formData: FormData
    setFormData: Dispatch<SetStateAction<FormData>>
    completedOrder: FormData | null
    setCompletedOrder: Dispatch<SetStateAction<FormData | null>>
}

type CartContextProviderProps = {
    children: ReactNode;
}

const CartContext = createContext<CartContextType | undefined>(undefined)

function CartContextProvider({ children }: CartContextProviderProps) {

    const [cartItems, setCartItems] = useState<CartItem[]>([])
    const [formData, setFormData] = useState<FormData>({
        name: "",
        password: "",
        cardNo: ""
    })
    const [completedOrder, setCompletedOrder] = useState<FormData | null>(null)

    return (
        <CartContext.Provider value={{
            cartItems, setCartItems,
            formData, setFormData,
            completedOrder, setCompletedOrder
        }}>
            {children}
        </CartContext.Provider>
    )


}

export { CartContext, CartContextProvider, type CartItem }