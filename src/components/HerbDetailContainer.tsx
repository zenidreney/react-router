import "./HerbDetailContainer.css"
import type { ReactNode } from "react"
import Badge from "./Badge"

const defaultValues = {

    imgSrc: "/images/basil.jpg",
    bgColor: "#2545B5",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.",
    name: "Some Plant",
    price: 20,
    button: <button>More Info</button>,
    isCulinary: true

}

export type HerbDetailProps = {

    children?: ReactNode
    imgSrc?: string
    bgColor?: string
    name?: string
    price?: number
    button?: string | ReactNode
    isCulinary?: boolean

}

export default function HerbDetailContainer({

    children = defaultValues.quote,
    imgSrc = defaultValues.imgSrc,
    bgColor = defaultValues.bgColor,
    name = defaultValues.name,
    price = defaultValues.price,
    button = defaultValues.button,
    isCulinary = defaultValues.isCulinary

}: HerbDetailProps) {

    return (
        <div className="testimonial-container" style={{ backgroundColor: bgColor }}>
            <div className="pic-container">
                <img src={imgSrc} alt="Profile picture." className="profile" />
            </div>

            <div className="text-container">
                <div className="herb-info">
                    <h1>{name}</h1>
                    {isCulinary ? <Badge>Culinary</Badge>
                        : <Badge color="red">Not edible</Badge>}
                </div>
                <div>
                    {children}
                </div>
                <div className="info-container" >
                    <p className="price">{price} €/pack</p>
                    {button}
                </div>
            </div>
        </div>
    )
}