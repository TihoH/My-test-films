import { useEffect, useState } from "react"

export const useDebounce = (value , deley ) => {
    const [debouceValue , setDebaunceValue] = useState(value)
    

    useEffect( () => {
        const handler = setTimeout( () => {
            setDebaunceValue(value)
        } , deley) 

        return () => {
            clearTimeout(handler)
        }
    } , [value , deley ] )


    return debouceValue
} 