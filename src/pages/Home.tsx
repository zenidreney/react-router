import HerbDetailContainer from "../components/HerbDetailContainer"
import { herbsData } from "../data"
import { Link } from "react-router"

export default function Home() {

    const randomNum = Math.floor(Math.random() * herbsData.length)
    const randomTwo = Math.floor(Math.random() * herbsData.length)

    return (
        <section className="home">
            <img src="/images/mix-of-herbs.jpg" />
            <h1>Mock Shop Real Plants</h1>
            <p>Find the variety you have been looking for.</p>
            <p>Super organic pure herbs and plants.</p>
            <p>See more in our product page.</p>
            <Link to={`/products/${herbsData[randomNum].name.toLowerCase()}`} >
                <div className="promo-home">
                    <HerbDetailContainer
                        imgSrc={`/images/${herbsData[randomNum].image}`}
                        name={herbsData[randomNum].name}
                        price={herbsData[randomNum].price}
                        isCulinary={herbsData[randomNum].isCulinary}
                    >
                        <p>{herbsData[randomNum].description}</p>
                    </HerbDetailContainer>
                   
                    <HerbDetailContainer
                        imgSrc={`/images/${herbsData[randomTwo].image}`}
                        name={herbsData[randomTwo].name}
                        bgColor="#a3581bff"
                        price={herbsData[randomTwo].price}
                        isCulinary={herbsData[randomTwo].isCulinary}
                    >
                        <p>{herbsData[randomTwo].description}</p>
                    </HerbDetailContainer>
                </div>
            </Link>
            <h3>Go ahead and check a super organic new hype plants in the shop.</h3>
            <h4>Click the link below</h4>
            <Link to="/products" className="to-btn">Products</Link>

            
        </section>
    )
}