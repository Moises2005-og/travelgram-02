import { Container } from "../container";

export function Gallery({data}: any) {
    return(
        <Container>
        <div className="flex flex-wrap flex-1 sm:justify-between justify-center">
            {
                data.length !== 0 ? (                    
                    data.map((item: any) => (
                        <img src={item.rel} key={item.id} className="mb-4 w-[350px]"/>
                    ))
                ):(
                <div className="w-full flex justify-center items-center">
                    <p className="text-center">Imagem não encontrada...</p>
                </div>
                )
            }
        </div>
        </Container>
    )
}