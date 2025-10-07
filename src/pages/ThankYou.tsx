import { useCart } from "../hooks/useCart"
import { Link } from "react-router"

export default function ThankYou() {

    const { formData, completedOrder, cartItems } = useCart()

    console.log(formData, completedOrder, cartItems)

    const summaryEls = cartItems.map((herb, index) => {
        return(
            <div key={`${herb.id}-${index}`} className="cart-container">
                <img src={`/images/${herb.image}`} alt={herb.alt} className="cart-img profile" />
                <div>
                    {
                        herb.quantity > 1 ?
                            <div>{herb.quantity} {herb.name}s</div> :
                            <div>{herb.quantity} {herb.name}</div>
                    }
                 
                </div>

            </div>
        )
    }) 

    const name = completedOrder && completedOrder.name

    return (
        <div className="summary-container">
            <h1>Thank you</h1>
            <h2>{name}</h2>
            <h3>You order is on its way</h3>
            <h4>Summary of your order</h4>
            {summaryEls}
            <Link to="/">Back to Home</Link>

        </div>
    )
}