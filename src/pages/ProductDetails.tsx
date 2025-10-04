import { useParams } from "react-router"
import { herbsData } from "../data"
import Badge from "../components/Badge"
import HerbDetailContainer from "../components/HerbDetailContainer"

import type { Herb } from "../data"

export default function ProductDetails() {

    const { id } = useParams<{ id: string }>()
    //console.log(id)
    const herbId = Number(id)

    const herb: Herb | undefined = herbsData.find(h => h.id === herbId)

    if (!herb) {
        return <p>This herb is not in the database</p>
    }

    return (
        <>
            <HerbDetailContainer
                imgSrc={`/images/${herb.image}`}
                bgColor="rgba(48, 51, 48, 0.5)"
                name={herb.name}
                title={
                    <Badge variant="pill" color="grey">
                        <a href={herb.urlLink}>more info</a>
                    </Badge>}
              
            >
                <>
                    <p>My name is {herb.name}</p>
                    <p>My benefits are {herb.benefits.join(", ")} </p>

                    {herb.isCulinary ? <Badge>Culinary</Badge> : <Badge color="red">Not edible</Badge>}
                </>
            </HerbDetailContainer>

        </>
    )
}