"use client"
import { useEffect, useState } from 'react'

const useDebounce = (defaultValue, delay = 500,) => {
    const [debouncedValue, setDebouncedValue] = useState("")
    useEffect(() => {
        const timer = setTimeout(() => setDebouncedValue(defaultValue), delay)
        return (() => clearTimeout(timer))
    },
        [delay, defaultValue])

    return debouncedValue
}

export default useDebounce