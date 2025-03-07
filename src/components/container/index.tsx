import { ReactNode } from "react"

type children = {
    children: ReactNode
}

export function Container({children}: children) {
    return(
        <div className="px-[32px]">
            {children}
        </div>
    )
}