"use client";

import { Dialog, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment, useState } from "react";
import {
  HiBars3,
  HiOutlineEnvelope,
  HiOutlineMapPin,
  HiOutlinePhone,
  HiXMark,
} from "react-icons/hi2";

const MobileSideBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClick = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);
  return (
    <div>
      <button
        className="rounded-full bg-teal-100 p-2 lg:hidden "
        onClick={onClick}
      >
        <HiBars3 className="cursor-pointer h-6 w-6 text-teal-700  " />{" "}
      </button>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-y-0 right-0   overflow-y-auto">
            <div className="flex min-h-full items-center justify-center  text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-72  h-screen transform overflow-hidden  bg-white p-6 align-middle shadow-xl transition-all">
                  <div>
                    <HiXMark onClick={closeModal} className="h-6 w-6 my-8" />
                  </div>
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 mb-8 flex justify-center"
                  >
                    <Image
                      src="/img/hope.png"
                      width={70}
                      height={70}
                      className="mr-3 shrink-0"
                      alt="Logo"
                    />
                  </Dialog.Title>
                  <section className="flex flex-col space-y-5">
                    <div className="flex flex-col items-center text-sm md:text-base">
                      <span className="bg-teal-100 p-2 rounded-full mr-2 ">
                        {" "}
                        <HiOutlineEnvelope className="h-6 w-6 text-teal-500" />{" "}
                      </span>{" "}
                      <p>info@hopeinformedfoundation.org</p>
                    </div>
                    <div className="flex flex-col items-center  text-sm md:text-base">
                      <span className="bg-teal-100 p-2 rounded-full mr-2">
                        {" "}
                        <HiOutlinePhone className="h-6 w-6 text-teal-500" />{" "}
                      </span>{" "}
                      <p>(+27) 67 109 1283</p>
                    </div>
                    <div className="flex flex-col items-center  text-sm md:text-base">
                      <span className="bg-teal-100 p-2 rounded-full mr-2">
                        {" "}
                        <HiOutlineMapPin className="h-6 w-6 text-teal-500" />{" "}
                      </span>
                      <p>
                        5 Regent Road, Parklands, 7441, Cape Town, South Africa
                      </p>
                    </div>
                  </section>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </div>
  );
};

export default MobileSideBar;
