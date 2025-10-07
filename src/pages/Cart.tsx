import { useCart } from "../hooks/useCart"




export default function Cart() {
    const { cartItems, removeFromCart, addToCart } = useCart()



    /* function removeFromCart(herb: CartItem) {
        // console.log("Removed, ", herb)

        if (!herb) {
            return
        }

        setCartItems(prev => {
            const existingItem = prev.find(item => item.name === herb.name)

            if (!existingItem) {
                return prev
            }

            if (existingItem.quantity > 1) {
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

    } */

    const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0).toFixed(2)

    //console.log("is it array: ", Array.isArray(cartItems), " What is the outcome: ", cartItems)

    const cartEls = cartItems.map((herb, index) => {
        return (
            <div key={`${herb.id}-${index}`} className="cart-container">
                <div>
                    {
                        herb.quantity > 1 ?
                            <div>{herb.quantity} {herb.name}s</div> :
                            <div>{herb.quantity} {herb.name}</div>
                    }
                    <div>total price:{herb.price}€</div>

                </div>
                <div>
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


        </>
    )
}