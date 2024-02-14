"use client"
import React, { Fragment, useEffect, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { AiOutlineClose } from 'react-icons/ai'
import Input from '../UI/Input'
import { useMutation } from '@tanstack/react-query'
import toast from 'react-hot-toast'
import axios from 'axios'
import Button from '../UI/Button'
import useLayoutContext from '@/context/LayoutContext'
const AppointmentForm = ({ children, className = "" }) => {
    const { defaultLang } = useLayoutContext()
    const [isOpen, setIsOpen] = useState(false)
    const [formData, setFormData] = useState({
        fullName: "",
        mobileNo: "",
        email: "",
        additionalQueries: ""
    })
    const [errors, setErrors] = useState({})
    const { mutate, error,isPending } = useMutation({
        mutationFn: () => axios.post("/api/book_appointment", {
            full_name: formData.fullName,
            mobile_number: formData.mobileNo,
            email: formData.email,

            additional_queries: formData.additionalQueries
        }),
        onSuccess: (value) => {
            setFormData({
                fullName: "",
                mobileNo: "",
                email: "",

                additionalQueries: ""
            })
            setIsOpen(false)
            toast.success("Your appointment is confirmed")
        }
    })
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }
    useEffect(() => {
        if (error?.response?.data?.errors) {
            setErrors(error?.response?.data?.errors)
        }
    }, [error?.response?.data?.errors])

    const closeModal = () => {
        setIsOpen(false)
    }


    return (
        <>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-[100]" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black/25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-[38rem] transform overflow-hidden  bg-white text-left align-middle shadow-xl transition-all  pb-8">
                                    <div className="pt-[40px] ps-8 relative pb-10 border-b border-[#EAEAEA]  text-secondary ">
                                        <h3 className=' text-secondary ' >
                                            Book your Appointment
                                        </h3>

                                        <span className=' absolute top-10 right-8  ' role='button' onClick={closeModal} >
                                            <AiOutlineClose color='#071F34' size={28} />
                                        </span>
                                    </div>
                                    <div className=" px-8 space-y-12 mt-8">

                                        <div>

                                            <Input className={errors?.full_name ? "border-rose-700" : ""} value={formData.fullName} name="fullName" onChange={handleChange} >
                                                <label className={`block ${errors?.full_name ? " text-rose-700 " : " text-secondary"}`}>
                                                    FULL NAME

                                                    <span className=' text-rose-600 ' >
                                                        *
                                                    </span>
                                                </label>
                                            </Input>
                                        </div>

                                        <Input value={formData.mobileNo} className={errors?.mobile_number ? "border-rose-700" : ""} name="mobileNo" onChange={(e) => (!isNaN(e.target.value) && e.target.value.length < 11) && handleChange(e)} >
                                            <label className={`block ${errors?.mobile_number ? " text-rose-700 " : " text-secondary"}`}>
                                                MOBILE NUMBER

                                                <span className={`${errors?.mobile_number ? " text-rose-700" : "text-[#7F7F7F]"} ms-2`} >
                                                    (With Country code)
                                                </span>

                                                <span className=' text-rose-600 ' >
                                                    *
                                                </span>
                                            </label>
                                        </Input>


                                        <Input value={formData.email} className={errors?.email ? "border-rose-700" : ""} name="email" onChange={handleChange} >
                                            <label className={`block ${errors?.email ? " text-rose-700 " : " text-secondary"}`}>
                                                EMAIL ADDRESS

                                                <span className=' text-rose-600 ' >
                                                    *
                                                </span>
                                            </label>
                                        </Input>

                                        <Input value={formData.additionalQueries} name="additionalQueries" onChange={handleChange}>
                                            <label className="block text-secondary">
                                                Note
                                            </label>
                                        </Input>


                                    </div>

                                    <div className="mt-8 px-8">
                                        <Button disabled={isPending} onClick={() => {
                                            mutate()
                                            console.log("workingggg");
                                        }} className={` py-2 uppercase text-sm font-bold ${defaultLang === "en" ? "" : "  ms-auto"} `} >
                                            {defaultLang === "en" ? "Submit" : " يُقدِّم"}
                                        </Button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>

            <Button onClick={() => setIsOpen(true)} className={`    ${className}`} >
                {children}
            </Button>
        </>
    )
}

export default AppointmentForm