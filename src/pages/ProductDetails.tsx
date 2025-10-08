import { useParams, Link } from "react-router"
import { herbsData } from "../data"
import { useCart } from "../hooks/useCart"
import HerbDetailContainer from "../components/HerbDetailContainer"

import type { Herb } from "../data"

export default function ProductDetails() {

    const { addToCart } = useCart()


    const { herbname } = useParams<{ herbname: string }>()
    //console.log(id)

    const herb: Herb | undefined = herbsData.find(h => h.name.toLowerCase() === herbname)

    if (!herb) {
        return <p>This herb is not in the database</p>
    }

    return (
        <div className="herb-els-container">
            <HerbDetailContainer
                imgSrc={`/images/${herb.image}`}
                bgColor="rgba(48, 51, 48, 0.5)"
                name={herb.name}
                price={herb.price}
                isCulinary={herb.isCulinary}
            >
                <p>{herb.description} </p>
                <p>Benefits: {herb.benefits.join(", ")} </p>
                <div className="btn-link-container">
                    <button
                        className="buy-btn"
                        onClick={() => addToCart(herb)}
                    >Buy Now</button>
                    <Link to="/products" className="to-btn">More Proucts</Link>
                </div>
            </HerbDetailContainer>

        </div>
    )
}