"use client"
import useLayoutContext from '@/context/LayoutContext';
import React, { memo, useEffect,  useState } from 'react'
import { FiChevronDown } from "react-icons/fi";
import { Menu } from '@headlessui/react';
import {twMerge} from "tailwind-merge"
const Select = ({
    options = [],
    required = false,
    label,
    onChange = () => 0,
    defaultValue = {},
    className=""
}) => {
    const [active, setActive] = useState(false)
    const [selected, setSelected] = useState(defaultValue)
    const { defaultLang } = useLayoutContext()
    const classes = twMerge(` w-full flex border-b border-${required ? "rose-700" : "secondary"}  items-center justify-between ${defaultLang === "en" ? "" : " flex-row-reverse"}  text-secondary  cursor-pointer`,className)
    useEffect(() => {
        onChange(selected)
    }, [selected])
    useEffect(() => {
        document.addEventListener("click", (e) => setActive(false), { capture: true })
    }, [active])

    return (
        <Menu as="div" className='select-box w-full relative '   >
            <Menu.Button className={classes} onClick={() => setActive(prev => !prev)} >
                <span className={`relative  `} >
                    {Object.keys(selected).length ? selected.label : label}

                    {(!Boolean(Object.keys(selected).length) && required) &&
                        <span className=' text-rose-700' >
                            *
                        </span>
                    }
                </span>

                <span className={` duration-300 ${active ? " rotate-180 " : "rotate-0"} `} >
                    <FiChevronDown color={!required ? '#071F34' : "rgb(225 29 72)"} size={24} />
                </span>

            </Menu.Button>
            <Menu.Items className="absolute  top-10 border border-[#D9D9D9] bg-white left-0 right-0 w-full z-50">
                {
                    options.map((option) => {
                        return <Menu.Item as="div" onClick={(e) => {

                            setSelected(option)
                            setActive(false)
                        }} key={option.id} data-id="opts" className='px-[10px] block py-2 text-gray text-base cursor-pointer' >
                            {option.label}
                        </Menu.Item>
                    })
                }
            </Menu.Items>

        </Menu>
    )
}

export default memo(Select)