import React, { Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";

interface ModalProps {
  isModalOpen: boolean;
  setModalOpen: Function;
  children: React.ReactNode;
}

export default function({ isModalOpen, setModalOpen, children }: ModalProps) {
  return (
    <Transition.Root show={isModalOpen} as={Fragment}>
      <Dialog as="div" className="fixed inset-0 z-50 overflow-y-auto" onClose={() => setModalOpen(false)}>
        <div className="flex items-center justify-center min-h-screen px-4 pt-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child as={Fragment} enter="ease-out duration-300" enterFrom="opacity-0" enterTo="opacity-100" leave="ease-in duration-200" leaveFrom="opacity-100" leaveTo="opacity-0">
            <Dialog.Overlay className="fixed inset-0 transition-opacity bg-black bg-opacity-75" />
          </Transition.Child>
          <span className="hidden sm:inline-block sm:h-screen sm:align-middle" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="relative inline-block overflow-hidden text-left align-bottom transition-all transform bg-white rounded-lg shadow-xl sm:my-8 sm:align-middle md:w-auto">{children}</div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
