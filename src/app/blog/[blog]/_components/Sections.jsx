"use client"
import React, { memo } from 'react'
import { useRef, useEffect } from 'react'
const Sections = ({ id = 1, setBlogSections = () => { }, heading = "", desc = [] }) => {
    const section = useRef(null)
    useEffect(() => {
        if (section.current) {
            setBlogSections(prev => [...prev, section.current])
        }
    }, [section.current])
    return (
        <div ref={section} id={id}  >
            <h4 className="mb-5 text-primary font-[500] md:font-[600]"> {heading} </h4>
            {
                desc.map((item, index) => {
                    return <p className=' block mt-3 ' key={index} >
                        {item}
                    </p>
                })
            }
            

        </div>
    )
}

export default memo(Sections)