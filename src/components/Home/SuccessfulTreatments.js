"use client"
import React, { useState,Fragment } from "react";
import Image from "next/image";
import useLayoutContext from "@/context/LayoutContext";
import { Dialog, Transition } from '@headlessui/react'
const SuccessulTreatmens = ({ treatments = [] }) => {
  const { defaultLang } = useLayoutContext()
  const [isOpen, setIsOpen] = useState(false)
  const [img, setImg] = useState("")
  const closeModal = () => setIsOpen(false)
  const openModal = () => setIsOpen(true)
  return (
    <>
      <div className="bg-secondary  mt-[150px] relative">
        <div className="absolute  left-0 right-0 z-0 top-0 bottom-0">
          <Image
            src="/assets/images/backgroundmesh2.svg"
            height={914}
            width={1024}
            alt="backgroundmesh"
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className=" text-[36px] relative z-20 xl:text-[56px] md:text-[42px] text-white text-left pl-10 xl:pl-0 md:pl-0 xl:text-center md:text-center pt-24">

          {defaultLang === "en" ? "OUR SUCCESSFUL TREATMENTS" : "علاجاتنا الناجحة"}
        </h2>
        <div className="grid  grid-flow-col md:grid-flow-row   md:grid-cols-3  gap-[40px] px-8 xl:px-20 md:px-10 pt-[60px] pb-20 z-10 relative overflow-x-auto md:overflow-x-hidden">

          {
            treatments.map((item) => {
              return <div key={item._id} className="min-w-[286px] relative group ">
                <div role="button" onClick={() => {
                  openModal()
                  setImg(`/basepath/${item?.image?.image}`)
                }} style={{ backgroundImage: "linear-gradient(180deg, rgba(10, 3, 24, 0.30) 38%, #0E4675 100%)" }} className="absolute w-full scale-0 duration-300 group-hover:scale-100  h-full flex items-center justify-center text-[white] text-[18px]">view</div>
                <Image
                  src={`/basepath/${item?.image?.image}`}
                  height={350}
                  width={350}
                  className="w-full object-cover md:h-[350px]  xl:h-[350px]"
                  alt="client"
                />

              </div>
            })
          }


        </div>

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
                    <Image alt='team member' width={500} height={500} className="w-full object-cover" src={img} />
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    </>
  );
};
export default SuccessulTreatmens;
