import HerbDetailContainer from "../components/HerbDetailContainer"
import { herbsData } from "../data"
import { Link } from "react-router"

export default function Home() {

    const randomNum = Math.floor(Math.random() * herbsData.length)
    const randomTwo = Math.floor(Math.random() * herbsData.length)

    return (
        <section className="home">
            <img src="/images/mix-of-herbs.jpg" />
            <h1 className="align-text">Mock Shop Real Plants</h1>
            <p className="align-text">Find the variety you have been looking for.</p>
            <p className="align-text">Super organic pure herbs and plants.</p>
            <p className="align-text">See more in our product page.</p>
                <div className="promo-home">
            <Link to={`/products/${herbsData[randomNum].name.toLowerCase()}`} >
                    <HerbDetailContainer
                        imgSrc={`/images/${herbsData[randomNum].image}`}
                        name={herbsData[randomNum].name}
                        price={herbsData[randomNum].price}
                        isCulinary={herbsData[randomNum].isCulinary}
                    >
                        <p>{herbsData[randomNum].description}</p>
                        <p className="button-p">Click for more info</p>
                    </HerbDetailContainer>
                    </Link>
                   
                    <Link to={`/products/${herbsData[randomTwo].name.toLowerCase()}`} >
                        <HerbDetailContainer
                            imgSrc={`/images/${herbsData[randomTwo].image}`}
                            name={herbsData[randomTwo].name}
                            bgColor="#a3581bff"
                            price={herbsData[randomTwo].price}
                            isCulinary={herbsData[randomTwo].isCulinary}
                        >
                            <p>{herbsData[randomTwo].description}</p>
                            <p className="button-p">Click for more info</p>
                        </HerbDetailContainer>
                    </Link>
                </div>
            <h3 className="align-text">Go ahead and check a super organic new hype plants in the shop.</h3>
            <h4 className="align-text">Click the link below</h4>
            <Link to="/products" className="to-btn">Products</Link>

            
        </section>
    )
}