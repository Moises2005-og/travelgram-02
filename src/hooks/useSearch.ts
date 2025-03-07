import { useState } from "react"

export function useSearch() {
    const [value, setValue] = useState("")
    const [filter, setFilter] = useState([])

    const handleChange = (e: any) => {
       setValue(e.target.value)
    }

    return {value, handleChange, filter, setFilter}
}