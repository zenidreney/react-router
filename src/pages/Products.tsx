import { Link } from "react-router"
import { herbsData } from "../data"

console.log(herbsData)

export default function Products() {

    const herbEls = herbsData.map(herb => {
        return (
            <Link to={`/products/${herb.id}`} >
                <img className="generic-img" src={`/images/${herb.image}`} alt={herb.alt}/>
                <p>
                    I am herb {herb.id} my name is {herb.name}
                </p>
               
            </Link>
        )
    })

    return (
        <>
            <p>I am Products</p>

            {herbEls}

        </>
    )
}
