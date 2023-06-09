import React from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";

const Modal = ({ isModalOpen, closeModal, sendFeedback, id, setFeedback }) => {
  // Set Feedback to the state

  const handleSetFeedback = (e) => {
    setFeedback(e.target.value);
  };

  return (
    <>
      <Transition appear show={isModalOpen} as={Fragment}>
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-2xl font-bold leading-6 text-accent font-nunito"
                  >
                    Send Feedback
                  </Dialog.Title>
                  <div className="mt-2">
                    <textarea
                      placeholder="Feedback"
                      className="textarea textarea-bordered w-full h-36 text-base"
                      name="feedback"
                      onChange={handleSetFeedback}
                    />
                  </div>

                  <div className="flex justify-between items-center mt-5">
                    <button
                      type="button"
                      className="btn-accent btn text-lg text-white"
                      onClick={() => sendFeedback(id)}
                    >
                      Send Feedback
                    </button>
                    <button
                      type="button"
                      className="btn-error btn text-lg text-white"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Modal;
