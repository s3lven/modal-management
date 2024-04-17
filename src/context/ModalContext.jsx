import { createContext, useState, useContext } from 'react'

export const ModalContext = createContext()

const ModalProvider = ( {children} ) => {
    const [modal, setModal] = useState(null)

    const openModal = (name, props = {}) => {
        setModal({name, props})
    }

    const closeModal = () => setModal(null)

    return (<ModalContext.Provider value={{modal, openModal, closeModal}}> {children} </ModalContext.Provider>)
}

// Custom Hook
export const useModalContext = () => {
    const context = useContext(ModalContext)
    if(!context) {
        throw new Error(
            "useModalContext must be used within a ModalContextProvider"
        )
    }

    return context
}

export default ModalProvider