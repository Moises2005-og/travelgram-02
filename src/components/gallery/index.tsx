import { Container } from "../container";

export function Gallery({data}: any) {
    return(
        <Container>
        <div className="flex flex-wrap flex-1 sm:justify-between justify-center">
            {
                data.map((item: any) => (
                    <img src={item.rel} key={item.id} className="mb-4 w-[350px]"/>
                ))
            }
        </div>
        </Container>
    )
}