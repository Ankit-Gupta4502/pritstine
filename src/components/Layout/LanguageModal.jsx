"use client"
import { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import {setCookie} from "nookies"
import Image from 'next/image';
import Button from '../UI/Button';
import useLayoutContext from '@/context/LayoutContext';
export const LanguageModal = () => {
    const { defaultLang, setDefaultLang, setLangugageModal: setIsOpen, languageModal: isOpen } = useLayoutContext()
    const closeModal = () => setIsOpen(false)
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
                                <Dialog.Panel className=" w-full  rounded-[3px]  border border-[#C9C9C9] shadow-[0px_16px_40px_0px_rgba(0, 0, 0, 0.16)]  max-w-[452px] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all  px-7  pt-10 pb-[30px] ">
                                    <Image src="/assets/images/language.png" width={450} height={320} alt='img' />
                                    <h5 className=' text-center mt-5  text-primary' >
                                        Choose the language familiar to you
                                    </h5>

                                    <div className="space-y-3 mt-[30px] ">
                                        <div role='button' onClick={() => {
                                            setDefaultLang("en")
                                            setCookie(null, 'lang', "en", {
                                                path: "/",
                                                maxAge: 365 * 24 * 60 * 60
                                            })

                                        }} className={`
                                         cursor-pointer flex items-center justify-between py-3 px-4 border border-[#D4D4D4] rounded-[3px] 

                                         ${defaultLang === "en" ? "bg-primary/30" : "bg-white"}

                                        `}>

                                            <div className="flex items-center space-x-6">
                                                <Image priority src="/assets/images/uk_flag.png" width={24} height={16} alt='img' />

                                                <span className=' font-[K2d] ' >
                                                    English
                                                </span>
                                            </div>


                                            <div className={`
                                            w-3 h-3 border ${defaultLang === "en" ? "border-primary" : "border-[#D4D4D4]"} grid place-items-center rounded-full
                                            `}>
                                                <div className={`w-2 h-2 ${defaultLang === "en" ? "bg-primary" : "bg-[#D4D4D4]"}  grid place-items-center rounded-full`} />
                                            </div>

                                        </div>

                                        <div role='button' onClick={() => {
                                            setDefaultLang("arab")
                                            setCookie(null, 'lang', "arab", {
                                                path: "/",
                                                maxAge: 365 * 24 * 60 * 60
                                            })

                                        }} className={`
                                         cursor-pointer flex items-center justify-between py-3 px-4 border border-[#D4D4D4] rounded-[3px] 

                                         ${defaultLang === "arab" ? "bg-primary/30" : "bg-white"}

                                        `}>

                                            <div className="flex items-center space-x-6">
                                                <Image src="/assets/images/arab_flag.png" width={24} height={16} alt='img' />

                                                <span className=' font-[K2d] ' >
                                                    Arabic
                                                </span>
                                            </div>


                                            <div className={`
                                            w-3 h-3 border ${defaultLang === "arab" ? "border-primary" : "border-[#D4D4D4]"} grid place-items-center rounded-full
                                            `}>
                                                <div className={`w-2 h-2 ${defaultLang === "arab" ? "bg-primary" : "bg-[#D4D4D4]"}  grid place-items-center rounded-full`} />
                                            </div>

                                        </div>
                                    </div>


                                    <Button className='mt-8' onClick={closeModal} >
                                        Let’s get started
                                    </Button>


                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}



