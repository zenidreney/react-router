import "./Badge.css"
import classnames from "classnames"

export default function Badge({children="badge", color="green", variant="square"}) {

    const colorClass = color && `badge-${color}`
    const variantClass = variant && `badge-${variant}`

    const className = classnames("badge", colorClass, variantClass)

    return (
        <span className={className}>{children}</span>
    )
}