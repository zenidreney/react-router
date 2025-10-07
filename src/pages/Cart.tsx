import { useCart } from "../hooks/useCart"
import { Link } from "react-router"

export default function Cart() {
    const { cartItems, removeFromCart, addToCart } = useCart()

    const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0).toFixed(2)

    //console.log("is it array: ", Array.isArray(cartItems), " What is the outcome: ", cartItems)

    const cartEls = cartItems.map((herb, index) => {
        return (
            <div key={`${herb.id}-${index}`} className="cart-container">
                    <img src={`/images/${herb.image}`} alt={herb.alt} className="cart-img profile"/>
                <div className="sub-total-container">
                    {
                        herb.quantity > 1 ?
                            <div>{herb.quantity} {herb.name}s</div> :
                            <div>{herb.quantity} {herb.name}</div>
                    }
                    <p>sub-total:{herb.price}€</p>

                    <button onClick={() => addToCart(herb)}>Add</button>
                    <button onClick={() => removeFromCart(herb)}>Remove</button>
                </div>
                
            </div>
        )
    })

    return (
        <>
            <h1>In your cart you have:</h1>
            {cartEls}

            <p>Total Price</p>
            {totalPrice} €
            <Link to="/checkout" className="to-btn">Checkout</Link>


        </>
    )
}