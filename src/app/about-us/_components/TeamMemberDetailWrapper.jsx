"use client"
import React, { useState, Fragment } from 'react'
import TeamMember from './TeamMember'
import { Dialog, Transition } from '@headlessui/react'
import MemberDetail from './MemberDetail'
const TeamMemberDetailWrapper = ({ data }) => {
    const [member,setMember] = useState({})
    const [isOpen, setIsOpen] = useState(false)

    const closeModal = () => setIsOpen(false)
    const openModal = () => setIsOpen(true)
    return (
        <>
            {data.map((item) => {
                return <TeamMember item={item} key={item._id} setMember={setMember} openModal={openModal} />
            })
            }
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
                        <div className="flex min-h-full items-center justify-center md:p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="md:opacity-0 md:scale-95 md:translate-x-0  translate-x-full "
                                enterTo="md:opacity-100 md:scale-100    translate-x-0"
                                leave="ease-in duration-200"
                                leaveFrom="md:opacity-100 md:scale-100 translate-x-0"
                                leaveTo="md:opacity-0 md:scale-95 md:translate-x-0 translate-x-full"
                            >
                                <Dialog.Panel className="w-full h-full md:h-auto max-w-[40rem] transform overflow-hidden  bg-white text-left align-middle shadow-xl transition-all  md:p-9  p-5 ">
                                    <MemberDetail member={member} closeModal={closeModal} />
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>



        </>
    )
}

export default TeamMemberDetailWrapper