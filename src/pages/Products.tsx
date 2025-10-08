import { Link } from "react-router"
import { herbsData } from "../data"
import { useCart } from "../hooks/useCart"

export default function Products() {

    const { addToCart } = useCart()

    const herbEls = herbsData.map(herb => {
        return (
            <div className="generic-herb-el-container" key={herb.id}>
                <Link to={`/products/${herb.name.toLowerCase()}`}  >
                    <div className="generic-herb-el">
                        <img className="generic-img profile" src={`/images/${herb.image}`} alt={herb.alt} />
                        <p className="block-padding">
                            {herb.name}
                        </p>
                    <p className="back-to-p">Click for more info</p>
                    </div>
                </Link>
                <button onClick={() => addToCart(herb)}>Add to Cart</button>
            </div>
        )
    })

    return (
        <>
            <div className="herb-els-container">
                {herbEls}
            </div>

        </>
    )
}
