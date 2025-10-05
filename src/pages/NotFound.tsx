import { Link } from "react-router"

export default function NotFound() {
    return (
        <>
            <p>The page you are looking for does not exist.</p>
            <Link to="/">Return Home</Link>
        </>
    )
}