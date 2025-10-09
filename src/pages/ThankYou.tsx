import { useCart } from "../hooks/useCart"
import { Link } from "react-router"

export default function ThankYou() {

    const { completedOrder } = useCart()


    if(!completedOrder) {
        return(
        <div className="summary-container">
            <h1>Opps no such order</h1>
            <h3>Try to add products to your cart</h3>
            <Link to="/" className="to-btn">Back to Home</Link>

        </div>
        )
    }
    
    const { user, items } = completedOrder

    const totalPrice = items.reduce((acc, item) => acc + (item.price * item.quantity), 0).toFixed(2)


    const summaryEls = items.map((herb, index) => {
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


    return (
        <div className="summary-container">
            <h1>Thank you</h1>
            <h2>{user.name}</h2>
            <h3>You order is on its way</h3>
            <h4>Summary of your order</h4>
            {summaryEls}
            <p>Total Paid: {totalPrice} €</p>
            <Link to="/" className="to-btn">Back to Home</Link>
        </div>
    )
}