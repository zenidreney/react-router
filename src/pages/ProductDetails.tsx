import { useParams } from "react-router"
import { herbsData } from "../data"
import { useContext } from "react"
import { CartContext } from "../context/CartContext"
import HerbDetailContainer from "../components/HerbDetailContainer"

import type { Herb } from "../data"

function useCart() {
    const context = useContext(CartContext)
    if(!context) {
        throw new Error("Please use useCart in CartContextProvider")
    }
    return context

}

export default function ProductDetails() {
    
    const { cartItems, setCartItems } = useCart()

    console.log( {cartItems, setCartItems} )

    const { herbname } = useParams<{ herbname: string }>()
    //console.log(id)

    const herb: Herb | undefined = herbsData.find(h => h.name.toLowerCase() === herbname)

    if (!herb) {
        return <p>This herb is not in the database</p>
    }

    return (
        <>
            <HerbDetailContainer
                imgSrc={`/images/${herb.image}`}
                bgColor="rgba(48, 51, 48, 0.5)"
                name={herb.name}
                price={herb.price}
                button={<button>Buy Now</button>}
                isCulinary={herb.isCulinary}
            >
                <p>{herb.description} </p>
                <p>Benefits: {herb.benefits.join(", ")} </p>
            </HerbDetailContainer>

        </>
    )
}