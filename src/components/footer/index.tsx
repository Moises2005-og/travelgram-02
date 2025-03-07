import { Container } from "../container"

export function Footer() {
    return(
        <Container>
        <div className="flex justify-between text-[#6C6C6C] text-[14px]">
            <div>Travelgram © 2024</div>
            <ul className="flex gap-3">
                <li>Termos de uso</li>
                <li>Política de privacidade</li>
            </ul>
        </div>
        </Container>
    )
}