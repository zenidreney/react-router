import "./Badge.css"
import classnames from "classnames"
import type { ReactNode } from "react"


export type BadgeProps = {
    children?: ReactNode
    color?: string
    variant?: string
}

export default function Badge({children="badge", color="green", variant="square"}:BadgeProps) {

    const colorClass = color && `badge-${color}`
    const variantClass = variant && `badge-${variant}`

    const className = classnames("badge", colorClass, variantClass)

    return (
        <span className={className}>{children}</span>
    )
}