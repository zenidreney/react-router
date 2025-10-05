import "./HerbDetailContainer.css"
import type { JSX } from "react"

const defaultValues = {

    imgSrc: "/images/basil.jpg",
    bgColor: "#2545B5",
    quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed urna nulla vitae laoreet augue. Amet feugiat est integer dolor auctor adipiscing nunc urna, sit.",
    name: "Some Plant",
    title: "Medicinal Plants"

}

export type HerbDetailProps = {

    children?: string | JSX.Element
    imgSrc?: string
    bgColor?: string
    name?: string
    title?: string | JSX.Element

}

export default function HerbDetailContainer({

    children = defaultValues.quote,
    imgSrc = defaultValues.imgSrc,
    bgColor = defaultValues.bgColor,
    name = defaultValues.name,
    title = defaultValues.title

}: HerbDetailProps) {

    return (
        <div className="testimonial-container" style={{ backgroundColor: bgColor }}>
            <div className="pic-container">
                <img src={imgSrc} alt="Profile picture." className="profile" />
            </div>

            <div className="text-container">
                <blockquote>
                    {children}
                </blockquote>
                <div className="info-container" >
                    <p className="name">{name} </p>
                    <p className="location">{title}</p>
                </div>
            </div>
        </div>
    )
}