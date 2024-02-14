import React from 'react'
import dynamic from 'next/dynamic'
// Helps avoid hydration error by disabling the server side rendering
const NoSSR = ({ children }) => {
    return (
        <>
            {children}
        </>
    )
}

const Wrapper = dynamic(() => Promise.resolve(NoSSR), {
    ssr: false
})

export default Wrapper