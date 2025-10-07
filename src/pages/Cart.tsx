import { useCart } from "../hooks/useCart"
import { Link } from "react-router"

export default function Cart() {
    const { cartItems, removeFromCart, addToCart } = useCart()

    const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0).toFixed(2)

    //console.log("is it array: ", Array.isArray(cartItems), " What is the outcome: ", cartItems)

    const cartEls = cartItems.map((herb, index) => {
        return (
            <div key={`${herb.id}-${index}`} className="cart-container">
                <img src={`/images/${herb.image}`} alt={herb.alt} className="cart-img profile" />
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
            <div style={{
                border: "1px solid rgba(59, 54, 8, 0.4)",
                borderRadius: "4px",
                paddingBottom: "0.5em"

            }}>
                {cartEls}

                <div style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    padding: "0.2em 0.5em 0"
                    

                }}>
                    <div>
                        <p>Total Price: </p>
                        <p>{totalPrice} €</p>
                    </div>
                <Link to="/checkout" className="to-btn">Checkout</Link>
                </div>


            </div>
        </>
    )
}