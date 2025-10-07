import { Link } from "react-router"
import { useCart } from "../hooks/useCart"

export default function Checkout() {

    const { cartItems, addToCart, removeFromCart } = useCart()

    console.log(cartItems)

    const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0).toFixed(2)

    const cartEls = cartItems.map((herb, index) => {
        return (
            <div key={`${herb.id}-${index}`} className="cart-container">
                <img src={`/images/${herb.image}`} alt={herb.alt} className="cart-img profile" />
                <div>
                    {
                        herb.quantity > 1 ?
                            <div>{herb.quantity} {herb.name}s</div> :
                            <div>{herb.quantity} {herb.name}</div>
                    }
                    <div>sub-total:{herb.price}€</div>

                    <button onClick={() => addToCart(herb)}>Add</button>
                    <button onClick={() => removeFromCart(herb)}>Remove</button>
                </div>

            </div>
        )
    })


    return (
        <div>
            <Link to="/" className="to-btn">Back to Home</Link>
            <Link to="/products" className="to-btn">Back to Products</Link>
            <div className="parent-checkout-container">
                <div className="checkout-container">
                    <h2>You are about to buy!</h2>
                    {cartEls}
                </div>
                <p>To be charged: {totalPrice} € </p>
            </div>
        </div>
    )
}