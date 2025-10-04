import { useParams } from "react-router"
import Badge from "../components/Badge"
import { herbsData } from "../data"

import type { Herb } from "../data"

export default function ProductDetails() {

    const { id } = useParams<{id:string}>()
    //console.log(id)
    const herbId = Number(id)

    const herb:Herb | undefined = herbsData.find(h => h.id === herbId)

    if(!herb) {
        return <p>This herb is not in the database</p>
    }

    return (
        <>
            <p>I am Product {id} details.</p>
            <p>My name is {herb.name}</p>
            <p>My benefits are {herb.benefits.join(", ")} </p>
            {herb.isCulinary ? <Badge>Culinary</Badge> : <Badge color="red">Not edible</Badge>}

        </>
    )
}