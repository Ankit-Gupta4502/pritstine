"use client"
import React, { useEffect, useState, Fragment, useRef } from 'react'
import { AiOutlineClose } from "react-icons/ai";
import useLayoutContext from "@/context/LayoutContext"
import Input from '../UI/Input';
import Select from '../UI/Select';
import Button from '../UI/Button';
import { useQuery, useMutation } from '@tanstack/react-query';
import axios from 'axios';
import toast from 'react-hot-toast';
import DatePicker from "react-datepicker";
import { Dialog, Transition } from '@headlessui/react'
import { IoCalendarOutline } from "react-icons/io5";
const BookingSidebar = () => {
    const { closeBookSidebar, isBookSidebarOpen, defaultLang, offerId, setOfferId } = useLayoutContext()
    const [formData, setFormData] = useState({
        fullName: "",
        mobileNo: "",
        email: "",
        treatment: {},
        date: "",
        time: "",
        bestTimeToCall: "",
        additionalQueries: ""
    })
    const [errors, setErrors] = useState({})

    const { data = [] } = useQuery({
        queryKey: ["treatments"],
        queryFn: () => axios("/api/treatment_list").then(({ data }) => data.data)
    })
    const btnRef = useRef(null)
    const { mutate, isPending } = useMutation({
        mutationFn: () => axios.post("/api/book_appointment", {
            full_name: formData.fullName,
            mobile_number: formData.mobileNo,
            email: formData.email,
            treatment_id: formData.treatment.id,
            preferred_date: formData.date,
            preferred_time: formData.time,
            best_time_to_call: formData.bestTimeToCall,
            additional_queries: formData.additionalQueries,
            offer_id: offerId
        }),
        onSuccess: (value) => {
            setFormData({
                fullName: "",
                mobileNo: "",
                email: "",
                treatment: {},
                date: "",
                time: "",
                bestTimeToCall: "",
                additionalQueries: ""
            })
            setOfferId(null)
            closeBookSidebar()
            toast.success("Your appointment is confirmed")
        },
        onError: (error) => {
            setErrors(error?.response?.data?.errors)
        }
    })
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleFocus = (name) => {
        const prev = structuredClone(errors)
        delete prev[name]
        console.log(prev);
        setErrors(prev)
    }

    useEffect(() => {
        if (!isBookSidebarOpen && Object.keys(errors).length) {
            setErrors({})
        }
    }, [isBookSidebarOpen, errors])



    return (


        <Transition appear show={isBookSidebarOpen} as={Fragment}>
            <Dialog initialFocus={btnRef} as="div" className="relative  overflow-hidden  z-[100]" onClose={closeBookSidebar}>
                <Transition.Child
                    as={Fragment}
                    enter="ease-out duration-300"
                    enterFrom="opacity-0"
                    enterTo="opacity-100"
                    leave="ease-in duration-200"
                    leaveFrom="opacity-100"
                    leaveTo="opacity-0"
                >
                    <div className="fixed overflow-hidden inset-0 bg-black/25" />
                </Transition.Child>

                <div className="fixed inset-0 overflow-x-clip">

                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="translate-x-full"
                        enterTo="translate-x-0"
                        leave="ease-in duration-200"
                        leaveFrom="translate-x-0"
                        leaveTo="translate-x-full"
                    >
                        <Dialog.Panel className=" ml-auto h-full w-full max-w-[588px] transform overflow-hidden  bg-white text-left align-middle shadow-xl transition-all   overflow-y-auto ">

                            <div className="pt-[60px] relative pb-10 border-b border-[#EAEAEA] ps-10 text-secondary ">
                                <h3 className=' text-secondary ' >
                                    {defaultLang === "en" ? "Book your Appointment" : "احجز موعدك"}
                                </h3>

                                <span className=' absolute top-10 right-8  ' role='button' onClick={closeBookSidebar} >
                                    <AiOutlineClose color='#071F34' size={28} />
                                </span>


                            </div>


                            <div className="px-10   space-y-10 pt-10">
                                <div>

                                    <Input className={errors?.full_name ? "border-rose-700" : ""} onFocus={() => handleFocus("full_name")} value={formData.fullName} name="fullName" onChange={handleChange} >
                                        <label className={`block ${errors?.full_name ? " text-rose-700 " : " text-secondary"}`}>
                                            {defaultLang === "en" ? "FULL NAME" : "الاسم الكامل"}

                                            <span className=' text-rose-600 ' >
                                                *
                                            </span>
                                        </label>
                                    </Input>
                                </div>

                                <Input onFocus={() => handleFocus("mobile_number")} value={formData.mobileNo} className={errors?.mobile_number ? "border-rose-700" : ""} name="mobileNo" onChange={(e) => (!isNaN(e.target.value) && e.target.value.length < 11) && handleChange(e)} >
                                    <label className={`block ${errors?.mobile_number ? " text-rose-700 " : " text-secondary"}`}>

                                        {defaultLang === "en" ? "  MOBILE NUMBER" : "الاسم الكامل"}
                                        <span className={`${errors?.mobile_number ? " text-rose-700" : "text-[#7F7F7F]"} ms-2`} >
                                            {defaultLang === "en" ? "(With Country code)" : "رقم الهاتف المحمول"}
                                        </span>

                                        <span className=' text-rose-600 ' >
                                            *
                                        </span>
                                    </label>
                                </Input>


                                <Input onFocus={() => handleFocus("email")} value={formData.email} className={errors?.email ? "border-rose-700" : ""} name="email" onChange={handleChange} >
                                    <label className={`block ${errors?.email ? " text-rose-700 " : " text-secondary"}`}>
                                        {defaultLang === "en" ? "EMAIL ADDRESS" : "عنوان البريد الإلكتروني"}

                                        <span className=' text-rose-600 ' >
                                            *
                                        </span>
                                    </label>
                                </Input>

                                <Select label={defaultLang === "en" ? "TREATMENT" : "علاج"}
                                    options={
                                        data.map((item) => ({ id: item._id, label: item.treatment_name }))
                                    }
                                    required={!!errors?.treatment}
                                    defaultValue={formData.treatment}
                                    onChange={(value) => {
                                        setFormData(prev => ({ ...prev, treatment: value }))
                                        handleFocus("treatment_id")
                                    }
                                    }

                                    className={errors?.treatment_id ? "text-rose-700 border-rose-700" : ""}
                                >

                                </Select>




                                <DatePicker minDate={new Date()} placeholderText='PREFERRED DATE *' showIcon calendarIconClassname='right-0' icon={<IoCalendarOutline />} popperClassName="!z-50" wrapperClassName='w-full  outline-0 ' calendarClassName='' className={`!pl-0 focus:outline-0 border-b  pb-2 w-full ${errors?.preferred_date ? "border-rose-700 placeholder:text-rose-700 " : "border-secondary placeholder:text-secondary"}`} selected={formData.date} onChange={(date) =>{
                                    setFormData(prev => ({ ...prev, date }))
                                    handleFocus("preferred_date")
                                }
                                } />

                                <DatePicker
                                    placeholderText='PREFERRED TIME *'
                                    onChange={(date) => {
                                        setFormData(prev => ({ ...prev, time: date }))
                                        handleFocus("preferred_time")
                                    }
                                    }
                                    popperClassName="!z-50" wrapperClassName='w-full  outline-0 ' calendarClassName='' className={`!pl-0 focus:outline-0 border-b  pb-2 w-full 

                                    ${errors?.preferred_time ? "border-rose-700 placeholder:text-rose-700 " : "border-secondary placeholder:text-secondary"}`

                                    } selected={formData.time}
                                    showTimeSelect
                                    showTimeSelectOnly
                                    timeIntervals={15}
                                    timeCaption="Time"

                                    dateFormat="h:mm aa"
                                />


                                {/* <Input type='time' value={formData.time} name="time" onChange={handleChange} className='  appearance-none  ' /> */}


                                <Input value={formData.bestTimeToCall} onFocus={()=>handleFocus("best_time_to_call")} name="bestTimeToCall" onChange={handleChange} className={errors?.best_time_to_call ? "border-rose-700 " : ""} >
                                    <label className={errors?.best_time_to_call ? " block text-rose-700 border-rose-700 " : "block text-secondary"}>
                                        {defaultLang === "en" ? "BEST TIME TO CALL YOU" : "أفضل وقت للاتصال بك"}



                                        <span className=' text-rose-600 ' >
                                            *
                                        </span>
                                    </label>
                                </Input>


                                <Input value={formData.additionalQueries} name="additionalQueries" onChange={handleChange}>
                                    <label className="block text-secondary">
                                        {defaultLang === "en" ? " ADDITIONAL QUERIES" : "استفسارات إضافية"}
                                    </label>
                                </Input>


                                <Button ref={btnRef} disabled={isPending} onClick={mutate} className='  !mb-14 w-[158px] !mt-10' >
                                    {isPending ? "wait..." : defaultLang === "en" ? "SUBMIT" : "يُقدِّم"}
                                </Button>
                            </div>

                        </Dialog.Panel>
                    </Transition.Child>
                </div>
            </Dialog>
        </Transition>
    )
}

export default BookingSidebar