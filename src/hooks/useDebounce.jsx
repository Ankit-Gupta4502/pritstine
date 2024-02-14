"use client"
import { useEffect, useState } from 'react'

const useDebounce = (defaultValue, delay = 500,) => {
    useEffect(() => {
        const timer = setTimeout(() => setDebouncedValue(defaultValue), delay)
        return (() => clearTimeout(timer))
    },
        [delay, defaultValue])
    const [debouncedValue, setDebouncedValue] = useState("")
    return debouncedValue
}

export default useDebounce