import { Link, useNavigate } from "react-router"
import { useCart } from "../hooks/useCart"
import "./Checkout.css"

export default function Checkout() {

    const { cartItems, setCartItems, addToCart, removeFromCart, setCompletedOrder } = useCart()
    const navigate = useNavigate()


    const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0).toFixed(2)

    const { formData, setFormData } = useCart()

    function handleFormInput(e: React.ChangeEvent<HTMLInputElement>) {
        const { name, value } = e.target
        console.log({ name, value })

        setFormData(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()


        if (!formData.name || !formData.cvv || !formData.cardNo) {
            alert("Please fill in")
            return
        } else {
            alert("Your order has been submitted!")
            console.log("Submitted", {
                items: cartItems,
                user: formData
            })
            navigate("/thank-you")
        }

        setCompletedOrder({
            user: formData,
            items: cartItems
        })



        setFormData({
            name: "",
            cvv: "",
            cardNo: ""
        })
        setCartItems([])
    }

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
                    <div>sub-total: <span className="bold-text">{herb.price} €</span></div>

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
                    {cartItems.length != 0 ?
                        <h2>You are about to buy!</h2> :
                        <h2>Nothing to buy!</h2>
                    }
                    {cartEls}
                </div>
                <p className="bold-text">To be charged: {totalPrice} € </p>

                {cartItems.length != 0

                    ?
                    <form
                        className="checkout-form"
                        onSubmit={handleSubmit}>
                        <label htmlFor="name">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleFormInput} />
                        <label htmlFor="cvv">CVV</label>
                        <input
                            type="password"
                            id="cvv"
                            name="cvv"
                            value={formData.cvv}
                            onChange={handleFormInput} />
                        <label htmlFor="cardNo">Card Number</label>
                        <input
                            type="text"
                            inputMode="numeric"
                            id="cardNo"
                            name="cardNo"
                            value={formData.cardNo}
                            onChange={handleFormInput} />
                        <button type="submit">Submit</button>
                    </form>

                    :

                    <Link to="/products" className="to-btn">Back to Products</Link>
                }
            </div>
        </div>
    )
}