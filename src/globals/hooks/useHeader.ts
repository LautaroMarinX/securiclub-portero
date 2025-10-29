import { useState } from "react";


export function useHeader(){
    
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
    setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    }

    return { handleOpen, isOpen, closeMenu };
}