import { useState, createContext } from "react";
import { useModal } from "../hooks/useModal";
import ModalTemplate from "../Modal/ModalTemplate";

export const ModalContext = createContext({});

export function ModalContextProvider({ children }) {
  const { modal, modalContent, handleModal } = useModal();

  return (
    <div>
      <ModalContext.Provider value={{ modal, modalContent, handleModal }}>
        <ModalTemplate />
        {children}
      </ModalContext.Provider>
    </div>
  );
}
